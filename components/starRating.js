import styles from "../styles/components/StarRating.module.scss";
import { UilFavorite } from '@iconscout/react-unicons';
import { useState } from 'react';

const StarRating = ({setRating, rating}) => {

    const [hover, setHover] = useState(0);

    return (
        <div className={styles.ratingbox}>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                key={index}
                className={index <= (hover || rating) ? styles.on : styles.off}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className={styles.star}><UilFavorite/></span>
              </button>
            );
          })}
        </div>
    )
}
 
export default StarRating;