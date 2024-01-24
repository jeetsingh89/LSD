import React, { useState } from 'react'
import Profile from './profile'
import { toast } from 'react-toastify'
const Addlinks = () => {
    const [link, setLink] = useState({url:"", title:"", icon:""})
    const handleLink = (e)=>{
        setLink({
            ...link,
            [e.target.id]:e.target.value
          })
    }
    const handleAddLink = ()=>{
        fetch('http://localhost:8080/save/addlinks',{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
            tokenMail: localStorage.getItem('OurToken'),
            link
          })
          }).then(res=>res.json()).then((data)=>{
            if(data.status==="success"){
              toast.success("Link Added Successfully");
          }
          }).catch(error=>toast.error(error.message))
        }
      
        
    

  return (
    <div className='flex flex-col'>
        <Profile></Profile>
         <form className="max-w-sm mx-auto py-3  mt-20">
  
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your URL</label>
              <div className="relative">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
           
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                </div>
                <input id='url' type="text" onChange={handleLink}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <label className="block mb-2  mt-2 text-sm font-medium text-gray-900 dark:text-white">Your Title</label>
                <div className="relative">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
           
                

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V19M6 6H18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                <input id='title' type="text" onChange={handleLink}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                
                <button type="button" onClick={handleAddLink}  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5" > Add </button>
               
            </div>
        </form>
    </div>
  )
}

export default Addlinks