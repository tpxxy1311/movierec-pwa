import styles from "../../styles/pages/Filmübersicht.module.scss"; 
import Filter from "../../components/filter";
import MovieList from "../../components/movieList";
import Footer from "../../components/footer"
import { useQuery } from "react-query";
import { useState } from "react";
import {NextSeo} from 'next-seo';

const getMovies = async(filter) =>{
    
    const { API_URL } = process.env
    const genreFilter=filter.queryKey[1].genre
    const sortFilter=filter.queryKey[2].sortPara
    const searchFilter=filter.queryKey[3].searchterm

    if(genreFilter!=="" && searchFilter==""){
        const res = await fetch(`${API_URL}/api/movies?populate=*&filters[genre]=${genreFilter}`)
        return res.json()  
    }
    if(searchFilter!=="" && genreFilter==""){
        const res = await fetch(`${API_URL}/api/movies?populate=*&filters[$or][0][title][$contains]=${searchFilter}&filters[$or][1][regisseur][name][$contains]=${searchFilter}`)
        return res.json()  
    }
    if(searchFilter!=="" && genreFilter!==""){
        const res = await fetch(`${API_URL}/api/movies?populate=*&filters[$or][0][title][$contains]=${searchFilter}&filters[$or][1][regisseur][name][$contains]=${searchFilter}&filters[$and][2][genre]=${genreFilter}`)
        return res.json()  
    }

    if(sortFilter!=="" && sortFilter!=="Seen"){
        const res = await fetch(`${API_URL}/api/movies?populate=*&${sortFilter}`)
        return res.json()  
    }
    // if(sortFilter=="Seen"){
    //     const resUnsort = await fetch(`${API_URL}/api/movies?populate=*&pagination[pageSize]=75`)
    //     const dataParsed= await resUnsort.json()
    //     console.log(dataParsed.data[0].attributes.seenlists.data.length)
    //     var res = dataParsed.data.sort((a,b) => b.attributes.seenlists.data.length - a.attributes.seenlists.data.length)
    //     console.log(res)
    //     return ({
    //         data:{
    //             res
    //         }
    //     }
    //     )
    // }
    else{
        const res = await fetch(`${API_URL}/api/movies?populate=*&pagination[pageSize]=75`)
        return res.json()
    }
    
}

const Movies = ({movies}) => {
    
    const [genre, setGenre]=useState("")
    const [searchterm, setSearchterm]=useState("")
    const [sortPara, setSortPara]=useState("")
    const {data, status} = useQuery(['movies', {genre: genre},{sortPara: sortPara}, {searchterm: searchterm}], getMovies, {initialData: movies})

    const SEO = {
        title: 'Übersicht - MovieRec',
        description: 'Erhalte mit MovieRec alle Informationen zu deinen Lieblingsfilmen und Regisseuren auf einen Blick'
    }

    return (
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.movielist}>
                <h1>Übersicht</h1>
                <h2>Alle Filme im Blick</h2>
                <Filter genre={genre} setGenre={setGenre} setSearchterm={setSearchterm} sortPara={sortPara} setSortPara={setSortPara}/>
                {data.data.length == 0  && <p className={styles.fail}>Suche war nicht erfolgreich</p>}
                {status === 'success' && <MovieList data={data}/>}
                {status === 'error' && <div>Fehler bei der Suche</div>}
            </div>
        </div> 
        <Footer/>
        </>   
    );
}

export async function getServerSideProps() {
    
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/api/movies?populate=*&pagination[pageSize]=75`)
    const data = await res.json()
  
    return {
        props: {
            movies: data
        }
    }
}
 
export default Movies;
