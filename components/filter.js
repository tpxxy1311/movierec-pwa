import styles from "../styles/components/Filter.module.scss";
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilTrash } from '@iconscout/react-unicons'
import { useState } from "react";
import SearchBar from "./searchbar";

const Filter = ({genre, setGenre, setSearchterm, sortPara, setSortPara}) => {

    const [isOpenGenre, setOpenGenre] = useState(false);
    const [isOpenSort, setOpenSort] = useState(false);

    function toggleClassGenre(){
        setOpenGenre(!isOpenGenre);
    }

    function toggleClassSort(){
        setOpenSort(!isOpenSort);
    }

    return ( 
        <div className={styles.filterbox}>
            <SearchBar setSearchterm={setSearchterm}/>
            <div className={styles.filterselects}>
                <div className={isOpenGenre ? styles.selectOpenGenre : styles.select} >
                    <span className={styles.selectTitle} onClick={toggleClassGenre}>Genre <UilAngleDown className={styles.icon}/></span>
                    <div className={styles.options}>
                        <span className={genre=="Thriller" ? styles.selected : styles.option} onClick={()=>setGenre("Thriller")}>Thriller</span>
                        <span className={genre=="Drama" ? styles.selected : styles.option} onClick={()=>setGenre("Drama")}>Drama</span>
                        <span className={genre=="Action" ? styles.selected : styles.option} onClick={()=>setGenre("Action")}>Action</span>
                        <span className={genre=="Kriegsfilm" ? styles.selected : styles.option} onClick={()=>setGenre("Kriegsfilm")}>Kriegsfilm</span>
                        <span className={genre=="Sci-Fi" ? styles.selected : styles.option} onClick={()=>setGenre("Sci-Fi")}>Sci-Fi</span>
                        <span className={genre=="Mafia" ? styles.selected : styles.option} onClick={()=>setGenre("Mafia")}>Mafia</span>
                        <span className={genre=="Fantasy" ? styles.selected : styles.option} onClick={()=>setGenre("Fantasy")}>Fantasy</span>
                        <span className={genre=="Western" ? styles.selected : styles.option} onClick={()=>setGenre("Western")}>Western</span>
                        <span className={genre=="Komödie" ? styles.selected : styles.option} onClick={()=>setGenre("Komödie")}>Komödie</span>
                        <span className={styles.remove} onClick={()=>{setGenre("")}}><UilTrash size="20" className={styles.icon}/></span>
                    </div>
                </div>
                <div className={isOpenSort ? styles.selectOpenSort : styles.select}>
                    <span className={styles.selectTitle} onClick={toggleClassSort}>Sortieren nach <UilAngleDown className={styles.icon}/></span>
                    <div className={styles.options}>
                        <span className={sortPara=="" ? styles.selected : styles.option} onClick={()=>setSortPara("")}>Standard</span>
                        <span className={sortPara=="sort=release:desc" ? styles.selected : styles.option} onClick={()=>setSortPara("sort=release:desc")}>Neuste zuerst</span>
                        <span className={sortPara=="sort=release" ? styles.selected : styles.option} onClick={()=>setSortPara("sort=release")}>Älteste zuerst</span>
                        {/* <span className={sortPara=="Seen" ? styles.selected : styles.option} onClick={()=>setSortPara("Seen")}>Meistgesehen</span> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Filter;