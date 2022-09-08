import styles from "../styles/components/Navigation.module.scss"
import Link from "next/link";

const Navigation = () => {
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
                    <Link href='/dashboard'>
                    <a>Meine Filme</a>
                    </Link>
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