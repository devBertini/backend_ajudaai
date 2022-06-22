import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateDepartmentValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional([rules.alpha({ allow: ['space', 'underscore', 'dash'] })]),
    enterprise: schema.number.optional(),
  })

  public messages: CustomMessages = {
    alpha: 'This {{ field }} cannot contain characters other than the letters of the alphabet.',
  }
}
