import styles from "../styles/components/DashboardList.module.scss"
import MovieCard from "./movieCard";

const SeenList = ({seenlist}) => {
    return ( 
        <div className={styles.section}>
            <h4>Bereits gesehen</h4>
            <p className={seenlist.length==0 ? styles.emptyinfo : styles.hide}>Es befinden sich noch keine Filme auf dieser Liste</p>
            <div className={styles.movielist}>
            {seenlist.map(movie =>(
                <MovieCard key={movie.id} movie={movie}/> 
            ))}
            </div>
        </div>
     );
}

export default SeenList;