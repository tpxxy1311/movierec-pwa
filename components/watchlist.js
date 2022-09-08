import styles from "../styles/components/DashboardList.module.scss"
import MovieCard from "./movieCard";

const Watchlist = ({watchlist}) => {
    return ( 
        <div className={styles.section}>
            <h4>Watchlist</h4>
            <p className={watchlist.length==0 ? styles.emptyinfo : styles.hide}>Es befinden sich noch keine Filme auf dieser Liste</p>
            <div className={styles.movielist}>
            {watchlist.map(movie =>(
                <MovieCard key={movie.id} movie={movie}/> 
            ))}
            </div>
        </div>
     );
}
 
export default Watchlist;