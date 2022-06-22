import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateTeamValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([
      rules.required(),
      rules.alpha({ allow: ['space', 'underscore', 'dash'] }),
    ]),
    department: schema.number([rules.required()]),
  })

  public messages: CustomMessages = {
    required: 'The {{ field }} is required to create a new team',
    alpha: 'This {{ field }} cannot contain characters other than the letters of the alphabet.',
  }
}
