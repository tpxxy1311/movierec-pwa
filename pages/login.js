import styles from "../styles/pages/Login.module.scss";
import { UilAngleRight } from '@iconscout/react-unicons';
import getConfig from 'next/config';
import { useState } from 'react';
import { useContext } from 'react';
import LoginContext from "../context/logincontext";
import { setCookie, parseCookies } from 'nookies';
import  Router from 'next/router';
import Link from "next/link";
import { useForm} from 'react-hook-form';
import {NextSeo} from 'next-seo';

const {publicRuntimeConfig}=getConfig();

const Login = () => {

    const {loginState, setLoginState} = useContext(LoginContext)
    const {userWatchlist, setUserWatchlist} = useContext(LoginContext)
    const {userSeenlist, setUserSeenlist} = useContext(LoginContext)
    const {userReclist, setUserReclist} = useContext(LoginContext)

    const{register, handleSubmit, formState:{errors}}=useForm();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed]=useState(false)
    const [notification, setNotificaion] = useState(false)

    const showNotification = () =>{
        setNotificaion(true)
        setTimeout(()=>setNotificaion(false),4000)
    }

    async function handleLogin() {
        
        const loginInfo = {
            identifier: username,
            password: password
        }

        const login = await fetch(`${publicRuntimeConfig.API_URL}/api/auth/local`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })

        const loginResponse = await login.json();

        console.log(loginResponse)

        if(loginResponse.error){
            setLoginFailed(true);
            showNotification();
            
        }
        else{
            setCookie(null, 'id', loginResponse.user.id , {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            setCookie(null, 'jwt', loginResponse.jwt , {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            setLoginState(true)
            Router.push('/dashboard');
            
            const id=parseCookies().id

            const res1 = await fetch(`${publicRuntimeConfig.API_URL}/api/seenlists/?populate=*&&filters[user][id][$eq]=${id}`)
            const seenlist = await res1.json()
            const seenlistNumbers = seenlist.data.map(item => item.attributes.movie.data.id)
            setUserSeenlist(seenlistNumbers)
    
            const res2 = await  fetch(`${publicRuntimeConfig.API_URL}/api/watchlists/?populate=*&&filters[users_permissions_user][id][$eq]=${id}`)
            const watchlist = await res2.json()
            const watchlistNumbers = watchlist.data.map(item => item.id)
            setUserWatchlist(watchlistNumbers)
  
            const res3 = await  fetch(`${publicRuntimeConfig.API_URL}/api/reclists/?populate=*&&filters[user][id][$eq]=${id}`)
            const reclist = await res3.json()
            const reclistNumbers = reclist.data.map(item => item.attributes.movie.data.id)
            setUserReclist(reclistNumbers)
        }
    }

    const SEO = {
        title: 'Anmelden - MovieRec'
    }

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container flexcontainer">
            <div className={styles.formbox}>
                <h1>Anmelden</h1>
                <form>
                    <label>Benutzername <span className={styles.error}>{errors.username?.message}</span></label>
                    <input type="text" {...register("username", {required:"(Bitte eingeben)"})} onChange={e => setUsername(e.target.value) } value={username} style={{ border: errors.username ? '2px solid #DA6161' : '' }} /><br/>
                    <label>Passwort <span className={styles.error}>{errors.password?.message}</span></label>
                    <input type="password" {...register("password", {required:"(Bitte eingeben)"})} onChange={e => setPassword(e.target.value) } value={password} style={{ border: errors.password ? '2px solid #DA6161' : '' }}/><br/>
                </form>
                <button onClick={handleSubmit(handleLogin)}>Weiter</button>
                <div className={styles.infotext}>
                    <span>Noch keinen Account ?</span>
                    <Link href="/registrierung">
                    <a>&nbsp;&nbsp;&nbsp;Hier registrieren<UilAngleRight className={styles.linkIcon}/></a>
                    </Link>
                </div>
            </div>
            <div className={notification ? styles.addNotification : `${styles.addNotification} ${styles.hideNotification}`}>
                <p>Anmeldung fehlgeschlagen. Nutzername oder Passwort inkorrekt</p>
            </div> 
        </div>
        </>
     )
}
 
export default Login;