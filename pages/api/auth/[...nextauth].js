import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Configure one or more database adapters
  // adapters: [
  //   MongoDBAdapter({
  //     mongoUri: process.env.MONGO_URI,
  //   }),
  // ],
  // Configure other options
  session: {
    jwt: true,
  },
  pages: {
    callback: '/api/auth/callback',
    logout: '/api/auth/logout',
    providers: {
      // Enable the Reddit provider
      reddit: true,
      // Enable the Google provider
      google: true,
    },
  },
})
