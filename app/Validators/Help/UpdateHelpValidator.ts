import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateHelpValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    description: schema.string.optional(),
    solution: schema.string.optional(),
    activity: schema.string.optional(),
    user: schema.number.optional(),
    team: schema.number.optional(),
    helper: schema.number.optional(),
    status: schema.number.optional(),
  })

  public messages: CustomMessages = {
    required: 'The {{ field }} is required to create a new help',
  }
}
