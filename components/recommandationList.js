import styles from "../styles/components/DashboardList.module.scss"
import MovieCard from "./movieCard";

const RecommandtionList = ({reclist}) => {
    
    return ( 
        <div className={styles.section}>
            <h4>Empfehlungen</h4>
            <p className={reclist.length==0 ? styles.emptyinfo : styles.hide}>Es befinden sich noch keine Filme auf dieser Liste</p>
            <div className={styles.movielist}>
             {reclist.map(movie =>(
                <MovieCard key={movie.id} movie={movie}/> 
            ))} 
            </div>
        </div>
     );
}
 
export default RecommandtionList;