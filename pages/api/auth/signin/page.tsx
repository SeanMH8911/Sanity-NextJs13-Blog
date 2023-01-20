'use client'

import { useRef } from "react"
import {signIn} from 'next-auth/react'

function login() {

    const userName = useRef("")
    const pass = useRef("")

    const onSubmit = async () => {
      const result = await signIn("credentials", {
        username: userName.current,
        password: pass.current,
        redirect: true,
        callbackUrl: "/"
      })
    }

  return (
    <div>
        <label>
            Username
            <input type="username"  onChange={(e) => (userName.current = e.target.value)}/>
        </label>
        <label>
            Password
            <input type="password"  onChange={(e) => (pass.current = e.target.value)}/>
        </label>
        <button onClick={onSubmit}>Login</button>
    </div>
  )
}

export default login