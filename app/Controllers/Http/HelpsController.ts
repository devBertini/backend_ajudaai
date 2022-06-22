import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Help from 'App/Models/Help'
import Status from 'App/Models/Status'
import Team from 'App/Models/Team'
import User from 'App/Models/User'
import CreateHelpValidator from 'App/Validators/Help/CreateHelpValidator'
import UpdateHelpValidator from 'App/Validators/Help/UpdateHelpValidator'

export default class HelpsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const teams = await Database.from('helps')
        .where('team', request.param('team_id'))
        .paginate(request.qs().page, request.qs().qtd)

      return response.status(200).send(teams.toJSON())
    } catch (error) {
      return response
        .status(500)
        .send({ error: 'Unable to search for helps. Please try again later.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { description, solution, activity, user, team, helper, status } = await request.validate(
      CreateHelpValidator
    )

    await Team.findOrFail(team)
    await User.findOrFail(user)
    await Status.findOrFail(status)

    try {
      const help = await Help.create({
        description,
        solution,
        activity,
        user,
        team,
        helper,
        status,
      })

      if (help) {
        response.status(200).send(help)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to fetch the help entered. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the help entered. Please try again later.' })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const help = await Help.find(request.param('id'))

      if (!help) {
        return response.status(404).send({
          warning: 'The help entered in the search was not found. Please check and try again.',
        })
      } else {
        response.status(200).send(help)
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the help entered. Please try again later.' })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { description, solution, activity, user, team, helper, status } = await request.validate(
      UpdateHelpValidator
    )

    const help = await Help.findOrFail(request.param('id'))

    try {
      if (description && description !== help.description) {
        help.description = description
      }

      if (solution && solution !== help.solution) {
        help.solution = solution
      }

      if (activity && activity !== help.activity) {
        help.activity = activity
      }

      if (user && user !== help.user) {
        help.user = user
      }

      if (team && team !== help.team) {
        help.team = team
      }

      if (helper && helper !== help.helper) {
        help.helper = helper
      }

      if (status && status !== help.status) {
        help.status = status
      }

      if (await help.save()) {
        response.status(200).send(help)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to update the informed help. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to update the informed help. Please try again later.' })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const help = await Help.find(request.param('id'))

    if (!help) {
      response.status(404).send({
        error: 'The help entered was not found. Please check the data and try again.',
      })
    }

    try {
      if (await help?.delete()) {
        response.status(200).send({ message: 'deleted' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the help entered. Please try again later.' })
    }
  }
}
