import Link from 'next/link'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

function StudioNav(props: any) {
  return (
    <div>
       <div className='flex items-center justify-between p-5'>
         <Link href="/" className='text-[#FF09CE] flex items-center'>
            <ArrowUturnLeftIcon className='h-6 w-6 text-[#FF09CE] mr-2  '/>
            Go to website
        </Link>
       </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNav