import styles from "../../../styles/pages/Filmübersicht.module.scss"; 
import MovieList from "../../../components/movieList";
import Footer from "../../../components/footer";
import {NextSeo} from 'next-seo';

const Genre = ({data}) => {
    
    const SEO = {
        title: `${data.data[0].attributes.genre} - MovieRec`,
        description: `Erhalte mit MovieRec einen Überblick über die Filme des Genre ${data.data[0].attributes.genre}}`
    }

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.movielist}>
                <h1>Genre</h1>
                <h2>{data.data[0].attributes.genre}</h2>
                <MovieList data={data}/>
            </div>
        </div>
        <Footer/>
        </> 
     );
}

export async function getServerSideProps({params}) {
    
    const { API_URL } = process.env
    const genre = params.slug[0].toUpperCase()+params.slug.slice(1)

    const res = await fetch(`${API_URL}/api/movies?populate=*&&filters[genre]=${genre}`)
    const data = await res.json()
    
    return {
        props: {
            data: data
        }
    }
}
 
export default Genre;