'use client'
import {getProviders, signIn} from 'next-auth/react'
type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>
}
function SignInComponent({providers}: Props) {
  return (
    <div className='space-y-8'>
        {Object.values(providers!).map((provider) => (
            <div key={provider.name}>
                <button className='bg-[#f83104c2] px-4 py-2 rounded w-[200px] text-white text-md text-[16px] hover:bg-myGrey' onClick={() => signIn(provider.id, {
                    callbackUrl: process.env.VERCEL_URL || "http://locahost:3000"
                })}>Sign in with {provider.name}</button>
            </div>
        ))}
    </div>
  )
}

export default SignInComponent