import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional([rules.alpha({ allow: ['space'] })]),
    username: schema.string.optional([
      rules.alpha(),
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    email: schema.string.optional([
      rules.unique({ table: 'users', column: 'email' }),
      rules.email(),
    ]),
    password: schema.string.optional([rules.minLength(8)]),
    team: schema.number.optional([]),
  })

  public messages: CustomMessages = {
    unique: 'This {{ field }} is not available.',
    alpha: 'This {{ field }} cannot contain characters other than the letters of the alphabet.',
    minLength: 'The {{ field }} must have minimum of {{ options.minLength }} characters.',
    email: `This {{ field }} must contain a valid email address.`,
  }
}
