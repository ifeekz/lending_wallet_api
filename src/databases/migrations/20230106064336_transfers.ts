import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transfers', table => {
    table.uuid('id', { primaryKey: true });
    table.uuid('user_id').notNullable();
    table.string('wallet_id', 10).notNullable();
    table.float('amount', 2).notNullable();
    table.uuid('transaction_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.foreign('wallet_id').references('wallet_id').inTable('wallets').onDelete('CASCADE');
    table.foreign('transaction_id').references('id').inTable('transactions').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transfers');
}
