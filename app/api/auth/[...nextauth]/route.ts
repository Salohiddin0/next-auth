import NextAuth from 'next-auth'
import GitLabprovider from 'next-auth/providers/gitlab'

export const authOptions = {
  providers: [
    GitLabprovider({
      clientId: process.env.GITLAB_CLIENT_ID as string,
      clientSecret: process.env.GITLAB_CLIENT_SECRET as string
    })
  ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
