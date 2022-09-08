import styles from "../styles/components/MovieList.module.scss"
import MovieCard from "./movieCard"
import RecommandtionList from "../components/recommandationList";
import SeenList from "../components/seenList";

const MovieList = ({data}) => {
    
    

    return ( 
        <div className={styles.movieList}>
            {data && data.data.map(movie =>(
                <MovieCard key={movie.id} movie={movie.attributes}/> 
            ))}
        </div>
     );
}
 
export default MovieList;