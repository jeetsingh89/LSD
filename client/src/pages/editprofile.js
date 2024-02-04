import React from 'react'
import Profile from './profile'
import { useEffect,useState,useContext } from 'react'
import UserContext from '../context/userContext'
import logo from '../assets/logo.png'
import { toast } from 'react-toastify'

const Editprofile = () => {
  
  useEffect(()=>{
    if(!localStorage.getItem('OurToken')){
      window.location.href ='/login'
    }
  },[])


  const {userData, setUserData}= useContext(UserContext)
  const [avatar, setAvatar]=useState('https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  //To convert image into string format
  const convertToBase64 = (file)=>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = ()=>{
        resolve(fileReader.result);
      }
      fileReader.onerror = (error)=>{
        reject(error);
      }
    })
  }

  const onUpload = async (e)=>{
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setAvatar(base64);
  }

 

  useEffect(()=>{
    if(userData){
      setAvatar(userData.avatar)
      setName(userData.name)
      setBio(userData.bio)
    }
  },[userData])
  const handleSave1= (e)=>{
    e.preventDefault();

    fetch('https://lsd-wine.vercel.app/save/editprofile', {
      method:'POST',
      headers:{
          "content-type": "application/json"
      },
      body: JSON.stringify({
      tokenMail: localStorage.getItem('OurToken'),
      avatar,
     // name,
     // bio
    })
    }).then(res=>res.json()).then((data)=>{
      if(data.status==="success"){
        toast.success("Updated Successfully");
    }
    }).catch(error=>toast.error(error.message))
  }

  const handleSave2= (e)=>{
    e.preventDefault();

    fetch('https://lsd-wine.vercel.app/save/editprofile', {
      method:'POST',
      headers:{
          "content-type": "application/json"
      },
      body: JSON.stringify({
      tokenMail: localStorage.getItem('OurToken'),
      //avatar,
        name,
     // bio
    })
    }).then(res=>res.json()).then((data)=>{
      if(data.status==="success"){
        toast.success("Updated Successfully");
    }
    }).catch(error=>toast.error(error.message))
  }
  const handleSave3= (e)=>{
    e.preventDefault();

    fetch('https://lsd-wine.vercel.app/save/editprofile', {
      method:'POST',
      headers:{
          "content-type": "application/json"
      },
      body: JSON.stringify({
      tokenMail: localStorage.getItem('OurToken'),
      //avatar,
     // name,
      bio
    })
    }).then(res=>res.json()).then((data)=>{
      if(data.status==="success"){
        toast.success("Updated Successfully");
    }
    }).catch(error=>toast.error(error.message))
  }

  return (
    <div className='flex flex-col'>
        <Profile></Profile>
        
        <form className="max-w-sm mx-auto py-3 mt-20" >
        <div className='relative'>
        
        <img className="w-16  h-16 rounded-full" src={avatar || logo } alt=""/>

        <input className='bottom-0 left-7 absolute w-5 h-5  bg-green-400 border-2 rounded-full flex align-middle justify-center' type='file' onChange={onUpload}></input>
        
       
         </div>
         <button type="button" onClick={handleSave1}  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5">Save</button>  
        
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"/></svg>
            </div>
            <input type="text" onChange={e=>setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
        </div>
        <button type="button" onClick={handleSave2} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5">Save</button>
        
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-2">Your Bio</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg fill="#000000" width="16px" height="16px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path class="st0" d="M12 25l3 3 15-15-3-3-15 15zM11 26l3 3-4 1z"></path></g></svg>
            </div>
            <input type="text" onChange={e=>setBio(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
        </div>
        <button type="button"  onClick={handleSave3} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5">Save</button>
        </form>
        

    </div>
  )
}

export default Editprofile