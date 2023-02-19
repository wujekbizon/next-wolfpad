import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../state/user';
import { hashPassword } from '../../helpers/auth';
import {
  connectToDatabase,
  findOneDocument,
  insertOneDocument,
} from '../../helpers/db';

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

    let client;

    try {
      client = await connectToDatabase('wolfpad');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    try {
      // chcek if the user already exist in our db
      const existingUser = await findOneDocument(client, 'users', {
        email: email,
      });

      if (existingUser) {
        res.status(422).json({ message: 'User already exist!' });
        return;
      }

      await insertOneDocument(client, 'users', newUser);
      res.status(201).json({ message: 'Account created!' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Insert data failed!' });
      } else {
        console.log(error);
      }
    }
  }
};

export default handler;
