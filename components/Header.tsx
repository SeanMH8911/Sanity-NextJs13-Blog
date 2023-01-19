import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex justify-between px-10 py-5 text-myGrey font-bold">
        <div className=" hover:underline">
          <Link href="/">
            Everything Spanish
          </Link>
        </div>
        <div>
          <Link href="">
            Login
          </Link>
        </div>
    </header>
  )
}

export default Header