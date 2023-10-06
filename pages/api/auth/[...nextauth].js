import NextAuth from 'next-auth';
import  GoogleProvider  from 'next-auth/providers/google';

import connectToDatabase from '../../../db';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.MONGODB_URI,
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      return Promise.resolve(session);
    },
  },
  events: {},
  debug: true,
});
