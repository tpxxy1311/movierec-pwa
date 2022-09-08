import styles from "../../styles/pages/Filminformation.module.scss"; 
import gradient from "../../styles/components/GenreGradients.module.scss";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import RatingButton from "../../components/ratingButton";
import RatingInfo from "../../components/ratingInfo";
import SeenInfo from "../../components/seenInfo";
import {NextSeo} from 'next-seo';

const MovieDetail = ({movieInfo}) => {

    
    const movie=movieInfo.data[0].attributes;
    const movieId = movieInfo.data[0].id;
    

    const SEO = {
        title: `${movie.title} - MovieRec`,
        description: `Erhalte mit MovieRec alle Informationen zu dem Film ${movie.title} und Regisseur ${movie.regisseur.data.attributes.name}  auf einen Blick}`
    }
    

    return (
        <>
        <NextSeo {...SEO}/>
        <div className="container flex-container">
            <div className={styles.infobox}>
                <h1 className={`${styles.mobiletitle} ${movie.genre==="Drama" ?   gradient.drama : (movie.genre==="Thriller") ?  gradient.thriller : (movie.genre==="Sci-Fi") ? gradient.scifi : (movie.genre==="Kriegsfilm") ? gradient.war : (movie.genre==="Mafia") ?  gradient.mafia : (movie.genre==="Action") ? gradient.action : (movie.genre==="Fantasy") ? gradient.fantasy : (movie.genre==="Western") ? gradient.western : (movie.genre==="Komödie") ? gradient.comedy : gradient.drama}`}>{movie.title}</h1>
                <div className={styles.topsection}>
                    <div className={styles.posterbox}>
                        <Image src={movie.poster.data.attributes.url} width={movie.poster.data.attributes.width} height={movie.poster.data.attributes.height} layout="responsive" objectFit="contain"  className={styles.poster} alt={`Poster ${movie.title}`}/>
                    </div>
                    <div className={styles.factsbox}>
                        <h1 className={movie.genre==="Drama" ?   gradient.drama : (movie.genre==="Thriller") ?  gradient.thriller : (movie.genre==="Sci-Fi") ? gradient.scifi : (movie.genre==="Kriegsfilm") ? gradient.war : (movie.genre==="Mafia") ?  gradient.mafia : (movie.genre==="Action") ? gradient.action : (movie.genre==="Fantasy") ? gradient.fantasy : (movie.genre==="Western") ? gradient.western : (movie.genre==="Komödie") ? gradient.comedy : gradient.drama}>{movie.title}</h1>
                        <div className={styles.ratingfacts}>
                            <RatingButton movie={movie} movieId={movieId}/>
                            <div className={styles.statsbox}>
                                 <RatingInfo movieId={movie.title}/>
                                 <SeenInfo movieId={movie.title}/> 
                            </div>
                        </div> 
                         <div className={styles.keyfacts}>
                            <span className={styles.factelement}>
                                <div className={styles.portraitbox}>
                                      <Image src={movie.regisseur.data.attributes.portrait.data.attributes.url} width="90%" height="90%" layout="responsive" objectFit="cover"  className={styles.portrait} alt="Portrait"/> 
                                </div>
                                <div>
                                    <p>Regisseur</p>
                                    <p><Link href={`/filme/regisseur/${movie.regisseur.data.attributes.slug}`}><a>{movie.regisseur.data.attributes.name}</a></Link></p>
                                </div>
                            </span>
                            <span className={styles.factelement}>
                                <p>Genre</p>
                                <p><Link href={`/filme/genre/${movie.genre}`}><a>{movie.genre}</a></Link></p>
                            </span>
                            <span className={styles.factelement}>
                                <p>Aus dem Jahr</p>
                                <p><Link href={`/filme/erscheinungsjahr/${movie.release}`}><a>{movie.release}</a></Link></p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.factstablet}>
                            <span className={styles.factelement}>
                                <div className={styles.portraitbox}>
                                    <Image src={movie.regisseur.data.attributes.portrait.data.attributes.url} width="90%" height="90%" layout="responsive" objectFit="cover"  className={styles.portrait} alt="Portrait"/> 
                                </div>
                                <div>
                                    <p>Regisseur</p>
                                    <p><Link href={`/filme/regisseur/${movie.slug}`}><a>{movie.regisseur.data.attributes.name}</a></Link></p>
                                </div>
                            </span>
                            <span className={styles.factelement}>
                                <p>Genre</p>
                                <p><Link href={`/filme/genre/${movie.genre}`}><a>{movie.genre}</a></Link></p>
                            </span>
                            <span className={styles.factelement}>
                                <p>Aus dem Jahr</p>
                                <p><Link href={`/filme/erscheinungsjahr/${movie.release}`}><a>{movie.release}</a></Link></p>
                            </span>
                </div>
                <div className={styles.bottomsection}>
                    <h3>Handlung</h3>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
        <Footer/>
        </> 
     );
}

export async function getStaticPaths() {

    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/api/movies?pagination[pageSize]=75`)
    const data = await res.json()

    const paths = data.data.map(movie =>{
        return{
            params: {
                slug: movie.attributes.slug.toString()
            },
        }
    })

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}){
    
    const { API_URL } = process.env
    const slug=params.slug;

    const res = await fetch(`${API_URL}/api/movies?populate=deep&&filters[slug][$eq]=${slug}`)
    const data = await res.json()

    return{
        props: {
            movieInfo: data,
            params: params
        }
    }
}
 
export default MovieDetail;