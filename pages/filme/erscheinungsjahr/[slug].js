import styles from "../../../styles/pages/Filmübersicht.module.scss"; 
import MovieList from "../../../components/movieList";
import Footer from "../../../components/footer";
import {NextSeo} from 'next-seo';

const Erscheinungsjahr = ({data}) => {
    
    const SEO = {
        title: `${data.data[0].attributes.release} - MovieRec`,
        description: `Erhalte mit MovieRec einen Überblick über alle Filme aus dem Jahr ${data.data[0].attributes.release}}`
    }

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.movielist}>
                <h1>Erscheinungsjahr</h1>
                <h2>{data.data[0].attributes.release}</h2>
                <MovieList data={data}/>
            </div>
        </div>
        <Footer/>
        </> 
     );
}

export async function getServerSideProps({params}) {
    
    const { API_URL } = process.env
    const year = params.slug;

    const res = await fetch(`${API_URL}/api/movies?populate=*&&filters[release]=${year}`)
    const data = await res.json()
    
    return {
        props: {
            data: data
        }
    }
}
 
export default Erscheinungsjahr;