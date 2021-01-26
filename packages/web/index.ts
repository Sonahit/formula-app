import Fastify from 'fastify';
import db from 'plugins/db';

const fastify = Fastify({
  ajv: {
    customOptions: {
      allErrors: true,
    },
  },
});

fastify
  .register(db)
  .register(routes)
  .listen(process.env.PORT || 3000);
