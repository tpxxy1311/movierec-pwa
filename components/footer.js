import styles from "../styles/components/Footer.module.scss"; 
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footerbox}>
                <p>© 2022 MovieRec. All rights reserved.</p>
                <div className={styles.linkbox}>
                    <Link href="/impressum">
                        <a>Impressum</a>
                    </Link>
                    <Link href="/datenschutz">
                        <a>Datenschutz</a>
                    </Link>
                </div>
            </div>
            
        </footer>
     );
}
 
export default Footer;