import styles from "../styles/components/ReviewCard.module.scss"
import { UilFavorite, UilInfoCircle } from '@iconscout/react-unicons';
import moment from "moment";
import 'moment/locale/de';
import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({review}) => {
    
    const { API_URL } = process.env
    const timestamp = moment(review.createdAt).startOf('hour').fromNow();   
    console.log(review.createdAt)   
    
    return ( 
        <div className={styles.reviewcard}>
            <div className={styles.posterbox}>
                <Link href={`/filme/${review.movie.data.attributes.slug}`}>
                    <div className={styles.linkBlur}>
                        <UilInfoCircle size="40" className={styles.icon}/>
                    </div>
                </Link>
                <Image src={review.movie.data.attributes.poster.data.attributes.url} width="100%" height="100%" layout="fill" objectFit="cover" className={styles.poster} alt="Poster"/>
                </div> 
            <div className={styles.infosection}>
                <p className={styles.timestamp}>{timestamp}</p>
                <p className={review.recommend ? styles.posttitle : styles.hidetitle}><Link href={`/user/${review.user.data.attributes.username}`}><a className={styles.link}>@{review.user.data.attributes.username}</a></Link> empfiehlt {review.movie.data.attributes.title}</p>
                <p className={!review.recommend ? styles.posttitle : styles.hidetitle}><Link href={`/user/${review.user.data.attributes.username}`}><a className={styles.link}>@{review.user.data.attributes.username}</a></Link> hat {review.movie.data.attributes.title} gesehen</p>
                <div className={styles.ratingbox}>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    if(index <= review.rating){
                        return (
                            <span key={index} className={styles.whitestar}><UilFavorite/></span>
                        );
                    }
                    else{
                        return (
                            <span key={index} className={styles.greystar}><UilFavorite/></span>
                        );
                    }
                })}
                </div>
                <p className={styles.comment}>&quot;{review.text}&quot;</p>
            </div>
        </div>
     );
}
 
export default ReviewCard