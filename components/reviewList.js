import styles from "../styles/components/ReviewList.module.scss"
import ReviewCard from "./reviewCard";

const ReviewList = ({reviews}) => {
    
    return ( 
        <div className={styles.reviewbox}>

            {reviews && reviews.data.map(review =>(
                <ReviewCard key={review.id} review={review.attributes}/> 
            ))}
        </div>
     );
}
 
export default ReviewList;