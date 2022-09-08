import Link from "next/link";
import styles from "../styles/components/MovieCard.module.scss";
import gradient from "../styles/components/GenreGradients.module.scss";


const MovieCard = ({movie}) => {
    
    return ( 
        <Link href={`/filme/${movie.slug}`}>
        <div className={styles.movieCard}>
            <p className={`${styles.title} ${movie.genre==="Drama" ?   gradient.drama : (movie.genre==="Thriller") ?  gradient.thriller : (movie.genre==="Sci-Fi") ? gradient.scifi : (movie.genre==="Kriegsfilm") ? gradient.war : (movie.genre==="Mafia") ?  gradient.mafia : (movie.genre==="Action") ? gradient.action : (movie.genre==="Fantasy") ? gradient.fantasy : (movie.genre==="Western") ? gradient.western : (movie.genre==="Komödie") ? gradient.comedy : gradient.drama}`}>
                {movie.title}
            </p>
            <div className={styles.movieInfo}>
            <span>{movie.regisseurShort}</span>
            <span className={styles.seperator}></span>
            <span>{movie.genre}</span>
            <span className={styles.seperator}></span>
            <span>{movie.release}</span>
            </div>
        </div>
        </Link>
     );
}
 
export default MovieCard;