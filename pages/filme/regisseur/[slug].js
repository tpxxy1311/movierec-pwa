import styles from "../../../styles/pages/Filmübersicht.module.scss"; 
import MovieList from "../../../components/movieList";
import Footer from "../../../components/footer";
import {NextSeo} from 'next-seo';

const Genre = ({data}) => {
    
    const SEO = {
        title: `${data.data[0].attributes.regisseur.data.attributes.name} - MovieRec`,
        description: `Erhalte mit MovieRec alle Informationen zu Regisseur ${data.data[0].attributes.regisseur.data.attributes.name} und seinen Filmen}`
    }

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.movielist}>
                <h1>Regisseur</h1>
                <h2>{data.data[0].attributes.regisseur.data.attributes.name}</h2>
                <p className={styles.bio}>{data.data[0].attributes.regisseur.data.attributes.bio}</p>
                <MovieList data={data}/>
            </div>
        </div>
        <Footer/>
        </> 
     );
}

export async function getServerSideProps({params}) {
    
    const { API_URL } = process.env
    const regie = params.slug

    const res = await fetch(`${API_URL}/api/movies?populate=deep&&filters[regisseur][slug]=${regie}`)
    const data = await res.json()
    
    return {
        props: {
            data: data
        }
    }
}
 
export default Genre;