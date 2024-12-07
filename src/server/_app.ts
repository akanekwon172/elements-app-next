import { Hono } from 'hono';

import { elementRouter } from '@/server/routes/elementRouter';

const app = new Hono().basePath('/api');

export const appRouter = app.route('/elements', elementRouter);

// Exported type definition for the hono/client.
export type AppRouter = typeof appRouter;

