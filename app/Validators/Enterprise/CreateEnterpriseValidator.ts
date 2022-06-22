import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateEnterpriseValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([
      rules.required(),
      rules.alpha({ allow: ['space', 'underscore', 'dash'] }),
      rules.unique({ table: 'enterprises', column: 'name' }),
    ]),
  })

  public messages: CustomMessages = {
    required: 'The {{ field }} is required to create a new enterprise',
    unique: 'This {{ field }} is not available',
    alpha: 'This {{ field }} cannot contain characters other than the letters of the alphabet.',
  }
}
