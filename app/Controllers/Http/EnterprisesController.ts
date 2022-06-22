import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Enterprise from 'App/Models/Enterprise'
import CreateEnterpriseValidator from 'App/Validators/Enterprise/CreateEnterpriseValidator'

export default class EnterprisesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const users = await Database.from('enterprises').paginate(request.qs().page, request.qs().qtd)

      return response.status(200).send(users.toJSON())
    } catch (error) {
      return response
        .status(500)
        .send({ error: 'Unable to search for enterprises. Please try again later.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { name } = await request.validate(CreateEnterpriseValidator)

    try {
      const enterprise = await Enterprise.create({
        name,
      })

      if (enterprise) {
        response.status(200).send(enterprise)
      } else {
        response
          .status(400)
          .send({ error: 'Unable to fetch the enterprise entered. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the enterprise entered. Please try again later.' })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const enterprise = await Enterprise.find(request.param('id'))

      if (!enterprise) {
        response.status(404).send({
          warning:
            'The enterprise entered in the search was not found. Please check and try again.',
        })
      } else {
        response.status(200).send(enterprise)
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the enterprise entered. Please try again later.' })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { name } = request.body()

    const enterprise = await Enterprise.findOrFail(request.param('id'))

    try {
      if (enterprise && enterprise.name !== name) {
        enterprise.name = name
      }

      if (await enterprise.save()) {
        response.status(200).send(enterprise)
      } else {
        response
          .status(400)
          .send({ error: 'Unable to update the informed enterprise. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to update the informed enterprise. Please try again later.' })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const enterprise = await Enterprise.find(request.param('id'))

    if (!enterprise) {
      response.status(404).send({
        error: 'The enterprise entered was not found. Please check the data and try again.',
      })
    }

    try {
      if (await enterprise?.delete()) {
        response.status(200).send({ message: 'deleted' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the enterprise entered. Please try again later.' })
    }
  }
}
