import styles from "../styles/pages/404.module.scss"

const Offline = () => {
    return ( 
    <>
    <div className="container flexcontainer">
            <div className={styles.infobox}>
                <h1>Offline</h1>
                <p className={styles.info}>Du verfügst gerade über keine Internetverbindung.</p>
            </div>
        </div>
    </> 
    );
}
 
export default Offline;