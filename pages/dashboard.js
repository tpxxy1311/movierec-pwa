import styles from "../styles/pages/Dashboard.module.scss"
import Footer from "../components/footer"
import RecommandtionList from "../components/recommandationList";
import Watchlist from "../components/watchlist";
import SeenList from "../components/seenList";
import { parseCookies } from "nookies";
import {NextSeo} from 'next-seo';

const Dashboard = ({watchlist, seenlist, reclist}) => {

    const watchlistmovies = watchlist.data.map(item => item.attributes.movie.data.attributes)
    const reclistmovies = reclist.data.map(item => item.attributes.movie.data.attributes)
    const seenlistmovies = seenlist.data.map(item => item.attributes.movie.data.attributes)

    const SEO = {
        title: 'Deine Filme - MovieRec'
    }

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.dashboard}>
                <div className={styles.topsection}>
                    <div className={styles.headlines}>
                        <h1>Dashboard</h1> 
                        <h2>Meine Filme</h2>
                    </div>
                </div>
                <Watchlist watchlist={watchlistmovies}/>
                <RecommandtionList reclist={reclistmovies}/>
                <SeenList seenlist={seenlistmovies}/>  
            </div>
        </div>
        <Footer/>
        </>   
     );
}

export async function getServerSideProps(ctx) {
    
    const { API_URL } = process.env
    const userId = parseCookies(ctx).id;
    
    
    const res = await fetch(`${API_URL}/api/watchlists/?populate=*&&filters[users_permissions_user][id][$eq]=${userId}`)
    const data = await res.json()
    const res2 = await fetch(`${API_URL}/api/seenlists/?populate=*&&filters[user][id][$eq]=${userId}`)
    const data2 = await res2.json()
    const res3 = await fetch(`${API_URL}/api/reclists/?populate=*&&filters[user][id][$eq]=${userId}`)
    const data3 = await res3.json()

    return {
        props: {
            watchlist:data, 
            seenlist: data2,
            reclist: data3
        }
    }
}
 
export default Dashboard;