import { UilClapperBoard } from '@iconscout/react-unicons';
import { UilRss } from '@iconscout/react-unicons';
import { UilBookmark } from '@iconscout/react-unicons';
import { UilSetting } from '@iconscout/react-unicons';
import styles from "../styles/components/MobileNav.module.scss";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from 'next/router';
import { parseCookies } from 'nookies';
import LoginContext from "../context/logincontext";

const MobileNav = () => {

    const {isActive, setActive} = useContext(LoginContext)

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const jwt = parseCookies().jwt;

    const checkDashboard = () =>{
        if(!jwt || jwt=="undefined"){
            Router.push('/login')
        }
        else{
            Router.push('/dashboard')
        }
    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false); 
          } else { // if scroll up show the navbar
            setShow(true);  
          }
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      }

      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

    return ( 
    <nav className={show ? styles.mobileNav : `${styles.mobileNav} ${styles.hidden}`}>
        <ul>
            <li>
                <Link href='/filme/'>
                <a><UilClapperBoard/></a>
                </Link>
            </li>
            <li>
                <a onClick={checkDashboard}><UilBookmark/></a>
            </li>
            <li>
                <Link href='/feed'>
                <a><UilRss/></a>
                </Link>
            </li>
            <li onClick={()=>setActive(true)}>
                <UilSetting />
            </li>
        </ul>
    </nav>
    );
}
 
export default MobileNav;