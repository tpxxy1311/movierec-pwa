import styles from "../styles/components/CookiePanel.module.scss";
import { useContext } from 'react';
import LoginContext from "../context/logincontext";
import { setCookie } from 'nookies';

const CookiePanel = () => {

    const {cookieAccept, setCookieAccept} = useContext(LoginContext)

    const handleCookies = () =>{
        setCookieAccept(true);
        setCookie(null, 'accept', true , {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }

    return ( 
        <div className={!cookieAccept ? styles.cookiePanel : `${styles.cookiePanel} ${styles.hidePanel}`}>
            <div className={styles.textBox}>
                <h6>Diese Seite verwendet Cookies.</h6>
            </div>
            <button onClick={handleCookies}>Akzeptieren</button>
            {/* <Link href="/">
                <a>Informationen</a>
            </Link> */}
        </div>
     );
}
 
export default CookiePanel;