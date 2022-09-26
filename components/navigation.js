import styles from "../styles/components/Navigation.module.scss"
import Link from "next/link";
import { parseCookies } from "nookies";
import Router from "next/router";

const Navigation = () => {

    const jwt = parseCookies().jwt;

    const checkDashboard = () =>{
        if(!jwt || jwt=="undefined"){
            Router.push('/login')
        }
        else{
            Router.push('/dashboard')
        }
    }

    return ( 
        <nav className={styles.navigation}>
            <ul className={styles.menu}>
                <li>
                    <Link href='/'>
                    <a>Start</a>
                    </Link>
                </li>
                <li>
                    <Link href='/filme/'>
                    <a>Übersicht</a>
                    </Link>
                </li>
                <li>
                    <a onClick={checkDashboard}>Meine Filme</a>
                </li>
                <li>
                    <Link href='/feed'>
                    <a>Feed</a>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;