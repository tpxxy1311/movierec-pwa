import styles from "../styles/pages/Registrierung.module.scss"
import getConfig from 'next/config';
import { useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import  Router from 'next/router';
import {useForm} from 'react-hook-form';
import { useContext } from 'react';
import {NextSeo} from 'next-seo';
import LoginContext from "../context/logincontext";

const {publicRuntimeConfig}=getConfig();

const Register = () => {

    const {loginState, setLoginState} = useContext(LoginContext)
    const {userWatchlist, setUserWatchlist} = useContext(LoginContext)
    const {userSeenlist, setUserSeenlist} = useContext(LoginContext)
    const {userReclist, setUserReclist} = useContext(LoginContext)

    const{register, handleSubmit, formState:{errors}}=useForm();

    const [name, setName]=useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notification, setNotificaion] = useState(false)

    const showNotification = () =>{
        setNotificaion(true)
        setTimeout(()=>setNotificaion(false),4000)
    }

    async function handleRegister() {
        
        const registerInfo = {
            name: name,
            username: username,
            email: email,
            password: password
        }

        const register = await fetch(`${publicRuntimeConfig.API_URL}/api/auth/local/register`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })

        const registerResponse = await register.json();
        console.log(registerResponse);

        if(registerResponse.error){
            showNotification();
        }
        else{
            setCookie(null, 'jwt', registerResponse.jwt , {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
    
            setCookie(null, 'id', registerResponse.user.id , {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            setLoginState(true)
            Router.push('/dashboard')
    
    
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
        title: 'Registrieren - MovieRec'
    }
    
    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container flexcontainer">
            <div className={styles.formbox}>
                <h1>Registrieren</h1>
                <form>
                    <label>Name <span className={styles.error}>{errors.name?.message}</span></label>
                    <input type="text" {...register("name", {required:"(Pflichtfeld)"})} onChange={e => setName(e.target.value) } value={name} style={{ border: errors.name ? '2px solid #DA6161' : '' }}/><br/>
                    <label>Benutzername <span className={styles.error}>{errors.username?.message}</span></label>
                    <input type="text" {...register("username", {required:"(Pflichtfeld)", minLength:{value:4, message:"(min. 4 Zeichen lang)"}})} onChange={e => setUsername(e.target.value) } value={username} style={{ border: errors.username ? '2px solid #DA6161' : '' }} /><br/>
                    <label>E-Mail <span className={styles.error}>{errors.email?.message}</span></label>
                    <input type="email" {...register("email", {required:"(Pflichtfeld)", minLength:{value:5, message:"(Bitte geben Sie eine gültige Mail-Adresse an)"}})} onChange={e => setEmail(e.target.value) } value={email} style={{ border: errors.email ? '2px solid #DA6161' : '' }}/><br/>
                    <label>Passwort <span className={styles.error}>{errors.password?.message}</span></label>
                    <input type="password" {...register("password", {required:"(Pflichtfeld)", minLength:{value:5, message:"(min. 5 Zeichen lang)"}})} onChange={e => setPassword(e.target.value) } value={password} style={{ border: errors.password ? '2px solid #DA6161' : '' }}/><br/>
                </form>
                <button onClick={handleSubmit(handleRegister)}>Weiter</button>
                <div className={notification ? styles.addNotification : `${styles.addNotification} ${styles.hideNotification}`}>
                <p>Anmeldung fehlgeschlagen. Nutzername oder E-Mail nicht mehr verügbar</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Register;