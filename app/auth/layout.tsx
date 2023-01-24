import Header from "../../components/Header"
import Providers from "../../components/Providers"
import '../../styles/globals.css'
import { unstable_getServerSession } from "next-auth/next"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
      
  // const session = await unstable_getServerSession()
;

  return (
    <html>
      <head />
        <body>
      <Providers >
        {/* <Header session={session} /> */}
        {children}
      </Providers>
      </body>
    </html>
  )
}
