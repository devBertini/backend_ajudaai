import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateEnterpriseValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional([
      rules.alpha({ allow: ['space', 'underscore', 'dash'] }),
      rules.unique({ table: 'enterprises', column: 'name' }),
    ]),
  })

  public messages: CustomMessages = {
    required: 'The {{ field }} is required to update a enterprise.',
    unique: 'This {{ field }} is not available.',
    alpha: 'This {{ field }} cannot contain characters other than the letters of the alphabet.',
  }
}
