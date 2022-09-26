import styles from "../styles/components/Header.module.scss";
import Link from "next/link";
import Router from "next/router";
import { useContext } from 'react';
import LoginContext from "../context/logincontext";
import { useState} from "react";
import { destroyCookie, parseCookies } from "nookies";
import Navigation from "./navigation";

const Header = () => {


    const {loginState, setLoginState} = useContext(LoginContext)
    

    const switchLoginState = () =>{
        if(loginState){
            setLoginState(false)
            destroyCookie(null, 'jwt')
            destroyCookie(null, 'id')
            Router.push('/login')

        }
        if(!loginState){
            Router.push('/login')
        }
    }

    
    return ( 
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src='/logo.svg' alt='Logo OrganizeMI'/>
                </Link>
            </div>
            <Navigation/>
            <button className={styles.login} onClick={switchLoginState}>
                <a>{!loginState ? 'Login' : 'Logout'}</a>
            </button>
        </header>
     );
}
 
export default Header;