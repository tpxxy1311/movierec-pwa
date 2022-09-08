import styles from "../styles/components/RatingInfo.module.scss";
import { UilEye } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';

const SeenInfo = ({movieId}) => {

    const { API_URL } = process.env
    const [seenCount, setSeenCount]=useState(0)

    useEffect(()=>{
        fetch(`${API_URL}/api/reviews?populate=*&&filters[movie][title][$eq]=${movieId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.meta.pagination.total)
            setSeenCount(data.meta.pagination.total)
        })
    },[])

    return ( 
        <span className={styles.ratingInfo}>{seenCount} <UilEye size="21" className={styles.icon}/></span>
     );
}
 
export default SeenInfo;