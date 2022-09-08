import styles from "../styles/components/HelpPanel.module.scss";
import { UilSetting, UilTimes } from '@iconscout/react-unicons'
import { useContext, useState } from "react";
import DarkmodeToggle from "./darkmodeToggle";
import NotificationToggle from "./notificationToggle";
import LoginContext from "../context/logincontext";

const HelpPanel = () => {
    
    const {isActive, setActive} = useContext(LoginContext)
    console.log(isActive)
    

    return ( 
        <div className={isActive ? styles.panelWrapperOpen : styles.panelWrapper}>
            <div className={styles.panelIcon} onClick={()=> setActive(true)}>
                <UilSetting/>
            </div>
            <div className={styles.helpPanel}>
                <div className={styles.panelTop}> 
                    <button className={styles.closeButton} onClick={()=> setActive(false)}>
                        <UilTimes/>
                    </button>
                    <h6>Einstellungen</h6>
                </div>
                <DarkmodeToggle/>
                <NotificationToggle/>
            </div>
        </div>
    );
}
 
export default HelpPanel;