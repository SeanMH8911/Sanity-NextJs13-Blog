import Link from "next/link"
import Image from "next/image"
import AuthOptions from "./AuthOptions"
import { unstable_getServerSession } from "next-auth"

type Props = {
session: Awaited<ReturnType<typeof unstable_getServerSession>>
}

function Header({session}: Props) {
  
  return (
    <header className="flex justify-between px-10 py-5 text-myGrey font-bold">
        <div className=" hover:underline">
          <Link href="/">
            Everything Spanish
          </Link>
        </div>
        <div>
          <AuthOptions session={session}/>
        </div>
    </header>
  )
}

export default Header