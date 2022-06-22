import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'helps'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('description').notNullable()
      table.string('solution').notNullable()
      table.string('activity').notNullable()
      table.integer('user').unsigned().references('users.id').notNullable()
      table.integer('team').unsigned().references('teams.id').notNullable()
      table.integer('helper').unsigned().references('users.id').nullable()
      table.integer('status').unsigned().references('statuses.id').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
