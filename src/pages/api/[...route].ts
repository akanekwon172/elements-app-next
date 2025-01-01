import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import { appRouter } from '@/server/_app';

export const config = { runtime: 'edge' };
// export const dynamic = 'force-dynamic';

const app = new Hono();
app.route('/', appRouter);

export default handle(app);
