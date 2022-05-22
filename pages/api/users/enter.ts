import client from '@libs/server/client';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const payload = phone ? { phone: parseInt(phone) } : { email };

  const user = await client.user.upsert({
    create: {
      ...payload,
      name: 'Anonymous',
    },
    update: {},
    where: {
      ...payload,
    },
  });

  console.log(user);

  res.json({ ok: true });
}

export default withHandler('POST', handler);
