import styles from "../styles/pages/Feed.module.scss"; 
import ReviewList from "../components/reviewList";
import NewUsers from "../components/userfeed";
import Footer from "../components/footer";
import {NextSeo} from 'next-seo';

const Feed = ({reviews}) => {

    const SEO = {
        title: 'Dein Feed - MovieRec'
    }
    console.log(reviews)

    return ( 
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.reviewcontainer}>
                <h1>Moviefeed</h1>
                <h2>Alle Aktivitäten im Blick</h2>
                <div className={styles.mainbox}>
                    <ReviewList reviews={reviews}/>
                    <NewUsers/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}

export async function getServerSideProps() {
    
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/api/reviews?populate=deep&&sort=id:DESC`)
    const data = await res.json()
  
    return {
        props: {
            reviews: data
        }
    }
}
 
export default Feed;