import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('username').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('password').unique().notNullable()
      table.integer('team').unsigned().references('teams.id').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
