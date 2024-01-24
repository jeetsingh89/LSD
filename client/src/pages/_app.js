import '@/styles/globals.css'
import "../styles/globals.css";
//import styles from './apply.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import UserContext from '../context/userContext';



import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [userData, setUserData] = useState({
      name: '',
      bio:'',
      avatar:'',
      handle:''
    })
    useEffect(() => {
      const handleStart = () => {
        setIsLoading(true);
        NProgress.start();
      };
      const handleComplete = () => {
        setIsLoading(false);
        NProgress.done();
      };
  
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
  
      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }, []);
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-WYTYXQXVK6`} />
    <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WYTYXQXVK6', {
                    page_path: window.location.pathname,
                    });
                `}
    </Script>
   
    <UserContext.Provider value = {{userData, setUserData}}>
    <Component {...pageProps} />
    <ToastContainer />
    {isLoading && <div className="nprogress-custom-parent"><div className="nprogress-custom-bar"/></div>}
    </UserContext.Provider>
    </ThemeProvider>

    </>
  )
}
