import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('wallets', table => {
    table.uuid('id', { primaryKey: true });
    table.string('wallet_id', 10).unique().notNullable();
    table.uuid('user_id').notNullable();
    table.float('balance', 2).defaultTo(0);
    table.timestamps();

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('wallets');
}
