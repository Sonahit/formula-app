import fp from 'fastify-plugin';
import Knex, { PgConnectionConfig } from 'knex';

export default fp((fastify, { host, database, port, ...options }: PgConnectionConfig) => {
  const knex = Knex({
    client: 'pg',
    connection: {
      ...options,
      host: host || '127.0.0.1',
      database: database || 'taxapp',
      port: port || 5432,
    },
  });
  fastify.decorate('knex', knex);
});
