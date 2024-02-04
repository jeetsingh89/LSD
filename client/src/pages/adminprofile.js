import React from 'react'
import { useRouter} from 'next/router';
import Dashboard from './dashboard';
import {toast} from 'react-toastify'

const AdminProfile = ({data}) => {
  console.log(data)
const navigate = useRouter();
  
 
  const handleLogout = ()=>{
      localStorage.removeItem('OurToken');
      window.location.href ='/login'
      toast.success('Logged Out....')
 }
 const handleAddLink=()=>{
    navigate.push('/addlinks')
 }

 const {name, handle, avatar, links} = data || "default"
 //const handle1 = localStorage.getItem('userHandle')
  console.log(name)
  console.log(handle)
  console.log(avatar)
  console.log(links)
  const toHandle = ()=>{
   // window.location.assign(`http://localhost:3000/${handle}`)
   navigate.push(`http://localhost:3000/${handle}`)
  }

  return (
   <div>
     <div class=" flex text-right mb-4 gap-4 justify-end">
      <button class="px-3 py-2 text-white rounded-md  hover:bg-blue-600" onClick={handleAddLink} title='add links'>
      <svg width="25px" height="25px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -600.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M137.7,450 C137.7,450.552 137.2296,451 136.65,451 L134.55,451 L134.55,453 C134.55,453.552 134.0796,454 133.5,454 C132.9204,454 132.45,453.552 132.45,453 L132.45,451 L130.35,451 C129.7704,451 129.3,450.552 129.3,450 C129.3,449.448 129.7704,449 130.35,449 L132.45,449 L132.45,447 C132.45,446.448 132.9204,446 133.5,446 C134.0796,446 134.55,446.448 134.55,447 L134.55,449 L136.65,449 C137.2296,449 137.7,449.448 137.7,450 M133.5,458 C128.86845,458 125.1,454.411 125.1,450 C125.1,445.589 128.86845,442 133.5,442 C138.13155,442 141.9,445.589 141.9,450 C141.9,454.411 138.13155,458 133.5,458 M133.5,440 C127.70085,440 123,444.477 123,450 C123,455.523 127.70085,460 133.5,460 C139.29915,460 144,455.523 144,450 C144,444.477 139.29915,440 133.5,440" id="plus_circle-[#1427]">

</path>
            </g>
        </g>
    </g>
</svg>


        </button>
        <button class="px-3 py-2 text-white rounded-md hover:bg-blue-600" onClick={handleLogout} title='logout'>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>

      <div class="flex items-center space-x-4">
        <img src={avatar} alt="avatar" class="w-16 h-16 rounded-full" cursor ="pointer" onClick={toHandle} title='Profile'/>
        <div>
          <h2 class="text-xl font-semibold">{name}</h2>
          <p class="text-gray-500">@{handle}</p>
        </div>
      </div>
   </div>
  )
}

export default AdminProfile