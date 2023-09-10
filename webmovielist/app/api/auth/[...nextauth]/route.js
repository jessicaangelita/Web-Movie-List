import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import axios from "axios";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials : {},

            async authorize(credentials){
                const {username, password} = credentials
                let user
                try {
                    const response = await axios({
                        method: 'post',
                        url: 'https://dummyjson.com/auth/login',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          data: {
                            username: username,
                            password: password
                          }
                    })
                    
                     //setUser(response.data)
                    console.log(response.data)
                    user  = response.data
                    return user
                } catch (error) {
                    console.log(error)
                    
                }

                
            }
        })
    ],
    session: {
        jwt: true,
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, user, token }) {
          session.user = token.user;
          console.log(user)
    
          return session
        },
        async jwt({ token, user }) {
          if (user) {
            token.user = user;
          }
          // console.log(token)
          return token
        },
      },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/SignIn",
    },
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}