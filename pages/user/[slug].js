import styles from "../../styles/pages/User.module.scss"; 
import Footer from "../../components/footer";
import RecommandtionList from "../../components/recommandationList";
import SeenList from "../../components/seenList";
import ReviewList from "../../components/reviewList";
import {NextSeo} from 'next-seo';

const UserInfo = ({user, seenlist, reclist, activities}) => {

   
    const reclistmovies = reclist.data.map(item => item.attributes.movie.data.attributes)
    const seenlistmovies = seenlist.data.map(item => item.attributes.movie.data.attributes)

    const SEO = {
        title: `@${user.username} - MovieRec`,
        description: `Hole dir Inspiration und Empfehlungen für neue Filme von MovieRec-Nutzer ${user.name}}`
    }

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.userpage}>
                <div className={styles.topsection}>
                    <h1>@{user.username}</h1>
                    <h2>{user.name}</h2>
                </div>
                 <div className={styles.activities}>
                    <h4>Zuletzt geteilt</h4>
                    <p className={activities.data.length==0 ? styles.emptyinfo : styles.hide}>Es wurden noch keine Filme geteilt</p>
                    <ReviewList reviews={activities}/>
                </div>
                 <RecommandtionList reclist={reclistmovies}/>
                <SeenList seenlist={seenlistmovies}/>   
            </div>
        </div>
        <Footer/>
        </>
     );
}

export async function getServerSideProps({params}) {
    
    const { API_URL } = process.env
    const username=params.slug;

    const res = await fetch(`${API_URL}/api/users?populate=*&&filters[username][$eq]=${username}`)
    const data = await res.json()
    const res2 = await fetch(`${API_URL}/api/seenlists/?populate=*&&filters[user][username][$eq]=${username}`)
    const data2 = await res2.json()
    const res3 = await fetch(`${API_URL}/api/reclists/?populate=*&&filters[user][username][$eq]=${username}`)
    const data3 = await res3.json()
    const res4 = await fetch(`${API_URL}/api/reviews?populate=deep&pagination[pageSize]=2&sort=id:DESC&filters[user][username][$eq]=${username}`)
    const data4 = await res4.json()

    return {
        props: {
            user: data[0],
            seenlist: data2,
            reclist: data3,
            activities: data4
        },
    }
}
 
export default UserInfo;