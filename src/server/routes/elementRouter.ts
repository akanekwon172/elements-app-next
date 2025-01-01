import { Hono } from 'hono';

// import { HTTPException } from "hono/http-exception";
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

import data from '@/data/elements-en.json';

export const elementRouter = new Hono()
  .get('/', async (c) => {
    return c.json({ elements: data });
  })
  .get('/:number',
    zValidator(
      'param',
      z.object({ number: z.coerce.number() }),
      (result, c) => {
        if (!result.success) {
          return c.text('Invalid!', 400);
          /* throw new HTTPException(400, { message: "URL の形式が正しくありません。", }); */
        }
      },
    ),
    async (c) => {
      const { number } = c.req.valid('param');
      const element = data.find((e) => e.number === number);

      if (!element) throw Error('Element not found.');

      return c.json(element);
    },
  );
