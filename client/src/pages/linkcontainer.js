import React from 'react'
import Link from 'next/link'

const LinkContainer = ({url, title, icon}) => {

 
  return (
    


<Link href={`https://${url}`} className="flex px-5 py-3 my-2 text-gray-1000 border border-gray-400 rounded-lg  bg-blue-600 bg-opacity-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
<li class="inline-flex items-center p-2">
<img className='h-10 w-10' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'></img>
<span className=' text-white font-bold px-3'>{title}</span>
</li>
</ol> 

</Link>
  )
}

export default LinkContainer