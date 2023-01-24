import {getProviders} from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from '../../../components/SignInComponent'

async function SignIn() {
    const providers = await getProviders()
  return (
    <div className='flex flex-col h-full justify-center items-center space-y-8 mt-20'>
        <div>
            <Image 
            className='rounded-full'
            width={150}
            height={150}
            src="/ES-R.png"
            alt="Logo"
            />
        </div>
            <SignInComponent providers={providers} />
    </div>
  )
}

export default SignIn