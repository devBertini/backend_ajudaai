import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Department from 'App/Models/Department'
import Team from 'App/Models/Team'
import CreateTeamValidator from 'App/Validators/Team/CreateTeamValidator'
import UpdateTeamValidator from 'App/Validators/Team/UpdateTeamValidator'

export default class TeamsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const teams = await Database.from('teams')
        .where('department', request.param('department_id'))
        .paginate(request.qs().page, request.qs().qtd)

      return response.status(200).send(teams.toJSON())
    } catch (error) {
      return response
        .status(500)
        .send({ error: 'Unable to search for teams. Please try again later.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { name, department } = await request.validate(CreateTeamValidator)

    await Department.findOrFail(department)

    const search = await Team.query().where('name', name).where('department', department).first()

    if (search) {
      return response.status(400).send({
        error: 'The informed team is already registered in the company. Please try again later.',
      })
    }

    try {
      const team = await Team.create({
        name,
        department,
      })

      if (team) {
        response.status(200).send(team)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to fetch the team entered. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the team entered. Please try again later.' })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const team = await Team.find(request.param('id'))

      if (!team) {
        return response.status(404).send({
          warning: 'The team entered in the search was not found. Please check and try again.',
        })
      } else {
        response.status(200).send(team)
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the team entered. Please try again later.' })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { name, department } = await request.validate(UpdateTeamValidator)

    const team = await Team.findOrFail(request.param('id'))

    try {
      if (name && name !== team.name) {
        team.name = name
      }

      if (department && department !== team.department) {
        team.department = department
      }

      if (await team.save()) {
        response.status(200).send(team)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to update the informed team. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to update the informed team. Please try again later.' })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const team = await Team.find(request.param('id'))

    if (!team) {
      response.status(404).send({
        error: 'The team entered was not found. Please check the data and try again.',
      })
    }

    try {
      if (await team?.delete()) {
        response.status(200).send({ message: 'deleted' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the team entered. Please try again later.' })
    }
  }
}
