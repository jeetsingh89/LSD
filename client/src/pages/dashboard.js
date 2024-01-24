import { useEffect, useState, useContext } from "react";
import Profile from "./profile";
import AdminProfile from "./adminprofile";
import LinkAnalytics from "./linkanalytics";
import link from '../assets/link.svg'
import email from '../assets/email.svg'
import { toast } from 'react-toastify'
import UserContext from "../context/userContext";

const Dashboard = () => {
 

    /*const [data, setData] = useState({});
    useEffect(() => {
  
      if(!localStorage.getItem('OurToken')){
       window.location.href ='/login'
      }
    
      fetch("http://localhost:8080/data/dashboard", {
        method:'POST',
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify({
            tokenMail: localStorage.getItem('OurToken')
           
          })
      }).then((res)=>{res.json()}).then((data)=>{
        if(data.status==='success'){
         
        setData(data.userData)
        localStorage.setItem('userHandle', data.userData.handle)
        toast.success(data.message);
        }
        toast.error("Ooops! Something happened!!!")
        
  
      }).catch((error)=>{
        console.log(error);
      })
  
  
    }, [])*/
    const [data, setData] = useState({});
    const {setUserData} = useContext(UserContext)
    useEffect(()=>{
      if(!localStorage.getItem('OurToken')){
        window.location.href ='/login'
      }
      fetch('http://localhost:8080/data/dashboard', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body : JSON.stringify({
          tokenMail : localStorage.getItem('OurToken')
        })
      }).then(res=>res.json()).then(dataya=>{
        if(dataya.status==="error"){
          return toast.error('Something Happened !!!')
        }
        setData(dataya.userData)
        setUserData(dataya.userData)
        localStorage.setItem('userHandle', dataya.userData.handle)
        toast.success(dataya.message)
      }).catch(err=>{
        console.log(err)
      })
    },[])
  
    return (
  
  <div className="flex flex-col">
      <Profile></Profile>
    <div className='grid grid-cols-2 md:grid-cols-4 max-w-fit min-w-fit my-5 mt-20 '>
    <LinkAnalytics lTitle='Links' lNumber={data.links} lSvg={link}></LinkAnalytics>
   
    </div>
  
    
    <div class="container mx-auto mt-8 p-4">
  
     
      <div class="bg-white p-8 rounded-md shadow-md">
  
        
       <AdminProfile data ={data}></AdminProfile>
  
        
      
      </div>
  
    </div>
  
    
    <div id="notificationModal" class="fixed inset-0 bg-black bg-opacity-50 hidden justify-center items-center">
      <div class="bg-white p-8 rounded-md shadow-md">
        <h2 class="text-lg font-semibold mb-4">Notifications</h2>
       
        <button onclick="hideNotificationModal()" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Close</button>
      </div>
    </div>
  
  
  </div>
    )
  }
  
  export default Dashboard