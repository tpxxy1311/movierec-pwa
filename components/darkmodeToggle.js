import styles from "../styles/components/DarkmodeToggle.module.scss";
import { UilSun, UilMoon } from '@iconscout/react-unicons'
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DarkmodeToggle = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className={styles.panelItem}>
        <p>Darstellung</p>
        <div className={styles.toggleBox}>
            <div className={theme=="light" ? styles.toggleButtonActive : styles.toggleButton} onClick={() => setTheme("light")}> <UilSun/> Light</div>
            <div className={theme=="dark" ? styles.toggleButtonActive : styles.toggleButton}  onClick={() => setTheme("dark")}> <UilMoon/> Dark</div>
        </div>
    </div>
  )
}

export default DarkmodeToggle