import styles from "../styles/components/UserList.module.scss"; 
import { useEffect, useState } from 'react';
import Link from "next/link";
import moment from "moment";
import 'moment/locale/de';

const NewUsers= () => {

    const { API_URL } = process.env
    const [userList, setUserList]=useState([])

    useEffect(()=>{
        fetch(`${API_URL}/api/users`)
        .then((res) => res.json())
        .then((data) => {
            data.reverse()
            const newUsers = data.slice(0, 3)
            setUserList(newUsers)
        })
    },[])
  
    return ( 
        <>
        <div className={styles.userList}>
            <p className={styles.top}>Neueste User</p>
            <div className={styles.userbox}>
                {
                userList.map(
                    user =>(
                    <div className={styles.user} key={user.id}>
                        <Link href={`/user/${user.username}`}>
                            <a>
                                <p>{moment(user.createdAt).startOf('minute').fromNow()}</p>
                                <p>@{user.username}</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
     );
}
 
export default NewUsers;