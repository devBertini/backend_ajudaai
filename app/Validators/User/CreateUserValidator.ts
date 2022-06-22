import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([rules.alpha({ allow: ['space'] }), rules.required()]),
    username: schema.string([
      rules.alpha(),
      rules.required(),
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    email: schema.string([
      rules.required(),
      rules.unique({ table: 'users', column: 'email' }),
      rules.email(),
    ]),
    password: schema.string([rules.required(), rules.minLength(8)]),
    team: schema.number([rules.required()]),
  })

  public messages: CustomMessages = {
    required: 'The {{ field }} is required to create a new user',
    unique: 'This {{ field }} is not available',
    alpha: 'This {{ field }} cannot contain characters other than the letters of the alphabet.',
    minLength: 'The array must have minimum of {{ options.minLength }} items',
    email: `This {{ field }} must contain a valid email address.`,
  }
}
