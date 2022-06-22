import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Status from 'App/Models/Status'
import CreateStatusValidator from 'App/Validators/Status/CreateStatusValidator'
import UpdateStatusValidator from 'App/Validators/Status/UpdateStatusValidator'

export default class StatusesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const teams = await Database.from('statuses').paginate(request.qs().page, request.qs().qtd)

      return response.status(200).send(teams.toJSON())
    } catch (error) {
      return response
        .status(500)
        .send({ error: 'Unable to search for teams. Please try again later.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { name } = await request.validate(CreateStatusValidator)

    try {
      const status = await Status.create({
        name,
      })

      if (status) {
        response.status(200).send(status)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to fetch the status entered. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the status entered. Please try again later.' })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const status = await Status.find(request.param('id'))

      if (!status) {
        return response.status(404).send({
          warning: 'The status entered in the search was not found. Please check and try again.',
        })
      } else {
        response.status(200).send(status)
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the status entered. Please try again later.' })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { name } = await request.validate(UpdateStatusValidator)

    const status = await Status.findOrFail(request.param('id'))

    try {
      if (name && name !== status.name) {
        status.name = name
      }

      if (await status.save()) {
        response.status(200).send(status)
      } else {
        return response
          .status(400)
          .send({ error: 'Unable to update the informed status. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to update the informed status. Please try again later.' })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const status = await Status.find(request.param('id'))

    if (!status) {
      response.status(404).send({
        error: 'The status entered was not found. Please check the data and try again.',
      })
    }

    try {
      if (await status?.delete()) {
        response.status(200).send({ message: 'deleted' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the status entered. Please try again later.' })
    }
  }
}
