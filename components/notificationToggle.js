import styles from "../styles/components/DarkmodeToggle.module.scss";
import { UilBell, UilBellSlash } from '@iconscout/react-unicons'
import { useState } from "react";

const NotificationToggle = () => {

  const [notification, setNotificaion]= useState(false)

  return (
    <div className={styles.panelItem2}>
        <p>Benachrichtigungen</p>
        <div className={styles.toggleBox}>
            <div className={notification==true ? styles.toggleButtonActive : styles.toggleButton} onClick={() => setNotificaion(true)}> <UilBell/> An</div>
            <div className={notification==false ? styles.toggleButtonActive : styles.toggleButton} onClick={() => setNotificaion(false)}> <UilBellSlash/> Aus</div>
        </div>
    </div>
  )
}

export default NotificationToggle