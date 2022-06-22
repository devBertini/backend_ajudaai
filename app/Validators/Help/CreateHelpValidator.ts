import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateHelpValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    description: schema.string([rules.required()]),
    solution: schema.string([rules.required()]),
    activity: schema.string([rules.required()]),
    user: schema.number([rules.required()]),
    team: schema.number([rules.required()]),
    helper: schema.number.optional(),
    status: schema.number([rules.required()]),
  })

  public messages: CustomMessages = {
    required: 'The {{ field }} is required to create a new help',
  }
}
