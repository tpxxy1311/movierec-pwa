import styles from "../styles/pages/404.module.scss"
import { UilAngleRight } from '@iconscout/react-unicons';
import Link from "next/link";
import {NextSeo} from 'next-seo';


const Error = () => {

    const SEO = {
        title: 'Seite nicht gefunden - MovieRec'
    }

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container flexcontainer">
            <div className={styles.infobox}>
                <h1>404</h1>
                <p className={styles.info}>Die gesuchte Seite existiert nicht.</p>
                <p className={styles.link}>
                    <Link href="/">
                        <a>Zurück <UilAngleRight/></a>
                    </Link>
                </p>
            </div>
        </div>
        </>
     );
}
 
export default Error;