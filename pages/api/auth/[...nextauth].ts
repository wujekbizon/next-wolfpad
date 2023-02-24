import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDatabase, findOneDocument } from '../../../helpers/db';
import { verifyPassword } from '../../../helpers/auth';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const client = await connectToDatabase('wolfpad');
        const user = await findOneDocument(client, 'users', {
          email: email,
        });

        if (!user) {
          return null;
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error('Credentials not valid');
        }

        const id = user._id.toString();
        const userName = user.name;

        return { email: user.email, id, name: userName };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      if (token && session.user) {
        // @ts-ignore
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user && user.id) {
        token.sub = user.id;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
