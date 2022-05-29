import mail from '@sendgrid/mail';
import twilio from 'twilio';
import client from '@libs/server/client';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';

mail.setApiKey(process.env.SEND_GRID_API_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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

  // 원래는 To에 들어갈 값으로 유저가 생성한 핸드폰 번호를 입력해야 하는데, 우리는 지금 무료 버전을 쓰기 때문에 한 번호로 밖에 전송을 못해봄
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_SERVICE_SID,
      to: process.env.TWILIO_PHONE_NUMBER!,
      body: `Your login token is ${payload}`,
    });
    console.log(message);
  } else if (email) {
    // 원래는 To에 들어갈 값으로 유저가 생성한 이메일을 입력해야 하는데, 우리는 지금 무료 버전을 쓰기 때문에 한 이메일로 밖에 전송을 못해봄
    const email = await mail.send({
      from: 'chiwon99881@gmail.com',
      to: 'chiwon99881@gmail.com',
      subject: 'Your Carrot Market Verification Email',
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    });
  }
  console.log(email);
  res.status(200).json({
    ok: true,
  });
}

export default withHandler('POST', handler);
