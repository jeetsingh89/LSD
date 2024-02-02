import React, {useState, useEffect, useContext} from 'react'
import { toast } from 'react-toastify'
import LinkTree from './linktree';
import LinkContainer from './linkcontainer';
import Socialtrays from './socialtrays';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import UserContext from '../context/userContext';
import dynamic from "next/dynamic";
import styled from "styled-components";
import BGImage from '@/component/BGImage';

//import pagenotfound from './pageNotFound';


const Handle = () =>{
  const Wrapper = styled.div`
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: transparent;
    justify-conten: center
    display: flex;
  `;

  const BackgroundImage = dynamic(() => import("../component/Backgroundimage"), {
    ssr: false,
    loading: () => <p>...</p>,
  });


const {userData, setUserData}= useContext(UserContext);
const [data, setData] = useState({})
const [userFound, setUserFound]= useState(false)
const [socialMedia, setSocialMedia] = useState({});
  const router = useRouter()

/*useEffect(()=>{
  if(router.query?.handle){
    fetch(`http://localhost:8080/get/${router.query.handle}`).then(res=>res.json()).then((data)=>{
      if(data.status==="error"){
        toast.error(data.error)
      }
      if(data.status==='success'){
        setData(data.user)
        setUserData(data.user)
        setUserFound(true)
        setSocialMedia(data.user.socialMedia)
        toast.success('User Found...')
        toast(data)
        
      }
    })
  }
  else{
    toast.error('Failed to fetch')
  }
}, [router.query])
//const {links} = data;
console.log(data)*/


/*if(!userFound){
    return (
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
          <div
            class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span
              class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>
    
            <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <a href='/'>Go Home</a>
            </span>
          </div>
        </button>
    </main>
    )
   }*/
   useEffect(()=>{
    if(router.query?.handle){
      fetch(`http://localhost:8080/get/socials/${router.query.handle}`).then(res=>res.json()).then((data)=>{
      //  if(data.status==="error"){
        //  toast.error(data.error)
       // }
        if(data.status==='success'){
          setSocialMedia(data.socialMedia)
          setUserData(data.user)
          toast('Socials found ')
        }
      })
    }
    //else{
    //  toast.error('Failed to fetch Socials')
  //  }
  }, [router.query])

  return (
    <Wrapper className=' overflow-y-auto  absolute'>
    
      <div className='flex flex-col relative'>

      
         <LinkTree data={userData} className='fixed' ></LinkTree>
         <Socialtrays socialMedia={socialMedia} ></Socialtrays>
        
         <BGImage></BGImage>
    </div>
    <BGImage></BGImage>
    </Wrapper>
   
  )
}

export default Handle