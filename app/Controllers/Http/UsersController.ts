import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Team from 'App/Models/Team'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/User/CreateUserValidator'
import UpdateUserValidator from 'App/Validators/User/UpdateUserValidator'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const users = await Database.from('users')
        .where('team', request.param('team_id'))
        .paginate(request.qs().page, request.qs().qtd)

      return response.status(200).send(users.toJSON())
    } catch (error) {
      return response
        .status(500)
        .send({ error: 'Unable to search for registered users. Please try again later.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { name, username, email, password, team } = await request.validate(CreateUserValidator)

    await Team.findOrFail(team)

    const search = await User.query().where('email', email).where('team', team).first()

    if (search) {
      return response.status(400).send({
        error: 'The informed user is already registered in the team. Please try again later.',
      })
    }

    try {
      const user = await User.create({
        name,
        username,
        email,
        password,
        team,
      })

      if (user) {
        response.status(200).send(user)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to fetch the user entered. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the user entered. Please try again later.' })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const user = await User.find(request.param('id'))

      if (!user) {
        return response.status(404).send({
          warning: 'The user entered in the search was not found. Please check and try again.',
        })
      } else {
        response.status(200).send(user)
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the user entered. Please try again later.' })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { name, username, email, password, team } = await request.validate(UpdateUserValidator)

    const user = await User.findOrFail(request.param('id'))

    try {
      if (name && name !== user.name) {
        user.name = name
      }

      if (username && username !== user.username) {
        user.username = username
      }

      if (email && email !== user.email) {
        user.email = email
      }

      if (password && password !== user.password) {
        user.password = password
      }

      if (team && team !== user.team) {
        user.team = team
      }

      if (await user.save()) {
        response.status(200).send(user)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to update the informed user. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to update the informed user. Please try again later.' })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const user = await User.find(request.param('id'))

    if (!user) {
      response
        .status(404)
        .send({ error: 'The user entered was not found. Please check the data and try again.' })
    }

    try {
      if (await user?.delete()) {
        response.status(200).send({ message: 'deleted' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the user entered. Please try again later.' })
    }
  }
}
