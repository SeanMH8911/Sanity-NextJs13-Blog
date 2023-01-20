'use client'

import { useSession, signIn, signOut } from "next-auth/react"

function AuthOptions() {
  const { data: session } = useSession()
  console.log(session);
  
  if (session) {
    return (
      <>
        Signed in as {} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
export default AuthOptions