import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Department from 'App/Models/Department'
import Enterprise from 'App/Models/Enterprise'

export default class DepartmentsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const users = await Database.from('departments')
        .where('enterprise', request.param('enterprise_id'))
        .paginate(request.qs().page, request.qs().qtd)

      return response.status(200).send(users.toJSON())
    } catch (error) {
      return response
        .status(500)
        .send({ error: 'Unable to search for departments. Please try again later.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { name, enterprise } = await request.validate(CreateDepartmentValidator)

    await Enterprise.findOrFail(enterprise)

    try {
      const department = await Department.create({
        name,
        enterprise,
      })

      if (department) {
        response.status(200).send(department)
      } else {
        response
          .status(400)
          .send({ error: 'Unable to fetch the department entered. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the department entered. Please try again later.' })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const department = await Department.find(request.param('id'))

      if (!department) {
        response.status(404).send({
          warning:
            'The department entered in the search was not found. Please check and try again.',
        })
      } else {
        response.status(200).send(department)
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the department entered. Please try again later.' })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { name, enterprise } = await request.validate(UpdateDepartmentValidator)

    const department = await Department.findOrFail(request.param('id'))

    try {
      if (name && name !== department.name) {
        department.name = name
      }

      if (enterprise && enterprise !== department.enterprise) {
        department.enterprise = enterprise
      }

      if (await department.save()) {
        response.status(200).send(department)
      } else {
        response
          .status(400)
          .send({ error: 'Unable to update the informed department. Please try again later.' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to update the informed department. Please try again later.' })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const department = await Department.find(request.param('id'))

    if (!department) {
      response.status(404).send({
        error: 'The department entered was not found. Please check the data and try again.',
      })
    }

    try {
      if (await department?.delete()) {
        response.status(200).send({ message: 'deleted' })
      }
    } catch (error) {
      response
        .status(500)
        .send({ error: 'Unable to fetch the department entered. Please try again later.' })
    }
  }
}
