import styles from "../styles/components/RatingInfo.module.scss";
import { UilFavorite } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';

const RatingInfo = ({movieId}) => {

    const { API_URL } = process.env
    const [averageRating, setAverageRating]=useState(0)

    useEffect(()=>{
        fetch(`${API_URL}/api/reviews?populate=*&&filters[movie][title][$eq]=${movieId}`)
        .then((res) => res.json())
        .then((data) => {
            const ratingList = data.data.map(item => item.attributes.rating)
            var ratingSum = 0;
            ratingList.forEach(number => ratingSum += number)
            ratingSum = ratingSum/ratingList.length
            var ratingSumRounded =Math.round((ratingSum + Number.EPSILON) * 10) / 10;
            setAverageRating(ratingSumRounded)
        })
    },[])

    console.log(averageRating);

    return ( 
        <span className={styles.ratingInfo}>{averageRating} <UilFavorite size="21" className={styles.icon}/></span>
     );
}
 
export default RatingInfo;