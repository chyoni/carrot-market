import client from '@libs/server/client';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const whereUser = phone
    ? { phone: parseInt(phone) }
    : email
    ? { email }
    : null;
  if (!whereUser)
    return res.status(400).json({ ok: false, message: 'user does not exist.' });

  const payload = Math.floor(100000 + Math.random() * 900000).toString();

  const user = await client.user.upsert({
    create: {
      ...whereUser,
      name: 'Anonymous',
    },
    update: {},
    where: {
      ...whereUser,
    },
  });
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  res.status(200).json({
    ok: true,
  });
}

export default withHandler('POST', handler);
