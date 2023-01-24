import Header from '../../components/Header'
import Providers from '../../components/Providers'
import '../../styles/globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html>
      <head />
      <body>
      <Providers >
        {children}
      </Providers>
      </body>
    </html>
  )
}
