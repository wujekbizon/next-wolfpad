import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../state/user';
import { hashPassword } from '../../helpers/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password, name }: User = req.body;

    const hashedPassword = await hashPassword(password);

    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 8 ||
      !name ||
      name.trim() === ''
    ) {
      res.status(422).json({
        message: 'Invalid input - password must be at least 8 characters long.',
      });
      return;
    }
  }
  res.status(201).json({ message: 'Account created!' });
};

export default handler;
