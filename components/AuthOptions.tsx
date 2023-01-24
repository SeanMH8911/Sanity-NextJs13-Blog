'use client'
import { signIn, signOut } from "next-auth/react"

function AuthOptions({session}: any) {
  if (session) {
    return (
      <>
       <div className="flex space-x-2">
         Hi, {session.user!.name} <br />
        <button className="text-myYellow" onClick={() => signOut()}>Sign out</button>
       </div>
      </>
    )
  }
  return (
    <>
      <div >
        <button className="text-myYellow" onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  )
}
export default AuthOptions