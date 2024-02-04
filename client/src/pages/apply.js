import React, { useState } from 'react'
import {toast} from 'react-toastify'
//import { useNavigate} from 'react-router-dom';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import styled from "styled-components";
import BGImage from '@/component/BGImage';
import Login from './login';
import styles from '../styles/apply.module.css'
import Link from 'next/link';


const Apply = () => {
    const Wrapper = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    display: flex;
  `;

  const BackgroundImage = dynamic(() => import("../component/Backgroundimage"), {
    ssr: false,
    loading: () => <p>...</p>,
  });

    const navigate = useRouter();
    const [handle, setHandle] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [submit, setSubmit] = useState(false);
    
    
  const handleRegister = (e)=>{
    e.preventDefault();

        fetch('https://lsd-wine.vercel.app/api/register',{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                handle,
                email,
                password
            })
        }).then(res=>res.json()).then((data)=>{
            console.log(data)
            if(data.status==="success"){
                toast.loading("Registered Successfully")
                localStorage.setItem("OurToken", data.token)
                setSubmit(true);
                navigate.push('/login')    
            }
        }).catch(err=>{
           toast.error(err.message)
        })
  }
  return (
    <section className={styles.background + " min-h-screen "} >
    
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
      <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="/images/logo22.png" alt="logo"/>
          LSD
      </Link>
      <div className="w-full bg-white  bg-opacity-30 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleRegister}>
                  <div>
                      <label for="socials"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Social Handle</label>
                      <input type="text" name="socials" id="socials" value ={handle} onChange={(e)=>setHandle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@handle" required=""/>
                  </div>
                  <div>
                      <label for="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" name="email" id="password" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="confirm-password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button type="submit" className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleRegister}>Let's Go</button>
                  <p className="text-sm font-light text-gray-1000 dark:text-gray-400">
                      Already have an account? <Link href="/login" class="font-medium text-violet-700">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
  
</section>
  )
}

export default Apply