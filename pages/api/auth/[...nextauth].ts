import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
     CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const {username, password} = credentials as any;
        const res = await fetch ("http://localhost:3000/auth/login", {
        
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            })
        })

        const user = await res.json()

        if( res.ok && user) {
            return user
        } else return null
    }
  })
    // ...add more providers here
  ],
  
  session: {
    strategy: "jwt"
  },
  // pages: {
  //   signIn: "/auth/signin"
  // }
}

export default NextAuth(authOptions)
