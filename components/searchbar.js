import styles from "../styles/components/SearchBar.module.scss";
import { UilSearchAlt } from '@iconscout/react-unicons'

const SearchBar = ({setSearchterm}) => {
    return ( 
        <div className={styles.searchbar}>
            <UilSearchAlt size="20"/>
            <input type="text" className={styles.searchfield} placeholder="Nach Film o. Regisseur suchen" onChange={(event)=> setSearchterm(event.target.value)}/>
        </div>
     );
}
 
export default SearchBar;