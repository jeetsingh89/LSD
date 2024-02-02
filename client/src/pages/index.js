import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/home.module.css'


export default function Home() {
  const navigate = useRouter();
  const onLogin=()=>{
    navigate.push('/login')
  }
  const onSignUp=()=>{
    navigate.push('/apply')
  }
  return (
    <>
    <div className='relative min-h-screen min-w-full'>
   
    <div className=' min-h-screen min-w-full absolute z-0'>
   
    <video src='/images/wbBG.mp4' autoPlay muted loop className=' object-cover min-h-screen  w-1/2 block float-left z-0'></video>
      <video src='/images/wbBG2.mp4' autoPlay muted loop className='object-cover min-h-screen w-1/2 block float-right z-0'></video>
    </div>
    <div className=' relative min-h-screen w-1/2 z-10 flex flex-col justify-center align-middle text-center float-left items-center'>
     
      <h1 className=' text-2xl font-bold text-white opacity-80 mb-2'>Link Saver Directory </h1>
      <button className="w-auto text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={onSignUp}>Sign Up</button>

    </div>
    <div className=' relative min-h-screen w-1/2 z-10 flex flex-col justify-center align-middle text-center float-right items-center'>
    <h1 className=' text-7xl lg:text-9xl font-bold text-black opacity-70 mb-2'>LSD</h1>
      <button className="w-auto text-white bg-blue-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={onLogin}>Log in</button>

    </div>
   
  
    
    </div>
    </>
  )
}
