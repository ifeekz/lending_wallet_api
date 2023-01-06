import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', table => {
    table.uuid('id', { primaryKey: true });
    table.string('wallet_id', 10).notNullable();
    table.string('description').nullable();
    table.float('amount', 2).notNullable();
    table.enum('type', ['CREDIT', 'DEBIT']).notNullable();
    table.enum('status', ['PENDING', 'COMPLETED']).notNullable();
    table.timestamps();

    table.foreign('wallet_id').references('wallet_id').inTable('wallets').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions');
}
