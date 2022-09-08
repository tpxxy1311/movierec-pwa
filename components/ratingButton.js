import styles from "../styles/components/RatingButton.module.scss";
import { UilPlus, UilHeart, UilClock, UilEye, UilTimes, UilAngleRight, UilCheck } from '@iconscout/react-unicons';
import { useState } from "react";
import Router  from "next/router"
import { parseCookies } from "nookies";
import { useContext } from 'react';
import LoginContext from "../context/logincontext";
import StarRating from "./starRating";

const RatingButton = ({movie, movieId}) => {
    
    const { API_URL } = process.env
    const userId = parseCookies().id
    const jwt = parseCookies().jwt

    const {userWatchlist, setUserWatchlist} = useContext(LoginContext)
    const {userSeenlist, setUserSeenlist} = useContext(LoginContext)
    const {userReclist, setUserReclist} = useContext(LoginContext)
     const [onWatchButton, setOnWatchButton] = useState(false)

    const watchlistIds = movie.watchlists.data.map(item=>item.id)
    console.log(watchlistIds)
    let matchingnumber=-1;
    let onWatchlist=false;
    for(var i=0 ; i<watchlistIds.length ; ++i) {
        for(var j=0 ; j<userWatchlist.length ; ++j) {
            if(watchlistIds[i] == userWatchlist[j]) {    
                matchingnumber = watchlistIds[i]; 
                onWatchlist=true;     
            }
        }
    }
    console.log(matchingnumber)

    const [clicked, setClicked] = useState(false)
    const [panelOpen, setPanelOpen] = useState(false)
    const [notification, setNotificaion] = useState(false)
    const [notificationText, setText] = useState("")
    const [paneltitle, setPanelTitle] = useState("Empfehlen")
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    const addToWatchlist = async () =>{
        const addmovie = {
            data: {
                movie:[{id:movieId}],
                users_permissions_user:[{id:userId}]
            }
        }
        setOnWatchButton(true)
        const add = await fetch(`${API_URL}/api/watchlists`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addmovie)
        })
        showNotification("zur Watchlist")
        const addResponse = await add.json()
        userWatchlist.push(addResponse.data.id)
    }

    const removeFromWatchlist = async () =>{

        const add = await fetch(`${API_URL}/api/watchlists/${matchingnumber}`, {
            method: "DELETE"
        })
        const addResponse = await add.json()
        console.log(addResponse)
        for( var i = 0; i < userWatchlist.length; i++){                    
            if ( userWatchlist[i] === matchingnumber) { 
                userWatchlist.splice(i, 1); 
                i--; 
            }
        }
    }

    const addToReclist = async () =>{
        const addmovie = {
            data: {
                movie:[{id:movieId}],
                user:[{id:userId}]
            }
        }
        const add = await fetch(`${API_URL}/api/reclists`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addmovie)
        })
       
        userReclist.push(movieId)
    }

    const addToSeenlist = async () =>{
        const addmovie = {
            data: {
                movie:[{id:movieId}],
                user:[{id:userId}]
            }
        }
        const add = await fetch(`${API_URL}/api/seenlists`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addmovie)
        })
        userSeenlist.push(movieId)
    }

    const addToReview = async () => {
        const addmovie = {
            data:{
                text:comment,
                rating: rating,
                movie:[{id:movieId}],
                user:[{id:userId}]
            }
        }
        const add = await fetch(`${API_URL}/api/reviews`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addmovie)
        })
        const addResponse = await add.json()
        console.log(addResponse)
    }

    const checkLogin = () =>{
        if(!jwt || jwt=="undefined"){
            Router.push('/login')
        }
        else{
            setClicked(true)
        }
    }

    const openPanel = (title) =>{
        setPanelTitle(title)
        setPanelOpen(true)
    }

    const showNotification = (text) =>{
        setText(text)
        setNotificaion(true)
        setTimeout(()=>setNotificaion(false),4000)
    }

    const shareMovie = () =>{
        addToReview();
        if(paneltitle=="Empfehlen"){
            addToReclist();
            if(!userSeenlist.includes(movieId)){
                 addToSeenlist();
                
            }
            showNotification("zu 'Empfehlen'")
        }
        if(paneltitle=="Gesehen"){
            addToSeenlist();
            showNotification("zu 'Gesehen'")
        }
        if(onWatchlist==true){
            removeFromWatchlist()
        }
        setPanelOpen(false)
    }

    return ( 
        <>
            <div className={styles.ratingbutton}>
                <button className={!clicked ? styles.show : styles.hide} onClick={checkLogin}><span className={styles.addbutton}><UilPlus size="20"/>&nbsp;Hinzufügen</span></button>
                <button className={clicked ? styles.show : styles.hide}>
                    <span className={userReclist.includes(movieId) ? styles.hideButtons : styles.iconbuttons} onClick={()=>{openPanel("Empfehlen")}}><UilHeart size="20"/></span>
                    <span className={userReclist.includes(movieId) ? styles.iconbuttonsChecked : styles.hideButtons} ><UilCheck size="17" className={styles.check}/><UilHeart size="20" className={styles.background}/></span>
                    <span className={userSeenlist.includes(movieId) ? styles.hideButtons : styles.iconbuttons} onClick={()=>{openPanel("Gesehen")}}><UilEye size="20"/></span>
                    <span className={userSeenlist.includes(movieId) ? styles.iconbuttonsChecked : styles.hideButtons} ><UilCheck size="17" className={styles.check}/><UilEye size="20" className={styles.background}/></span>
                    <span className={userWatchlist.includes(matchingnumber) || userSeenlist.includes(movieId) || onWatchButton ? styles.hideButtons : styles.iconbuttons} onClick={addToWatchlist}><UilClock size="20"/></span>
                    <span className={userSeenlist.includes(movieId) ? styles.inactiveButtons : styles.hideButtons}><UilClock size="20"/></span>
                    <span className={userWatchlist.includes(matchingnumber) || onWatchButton ? styles.iconbuttonsChecked : styles.hideButtons} onClick={removeFromWatchlist}><UilCheck size="17" className={styles.check}/><UilClock size="20" className={styles.background}/></span>
                </button>
            </div>
            <div className={panelOpen ? styles.ratingpanel : `${styles.ratingpanel} ${styles.hidden}`}>
                <div className={styles.topmenu}>
                    <h6>{paneltitle}</h6>
                    <div className={styles.buttoncontainer}>
                        <button onClick={shareMovie}><UilAngleRight size="20"/></button>
                        <button onClick={() => setPanelOpen(false)}><UilTimes size="20"/></button>
                    </div>
                </div>
                <StarRating setRating={setRating} rating={rating}/>
                <textarea placeholder="Dein Kommentar" onChange={(event)=>setComment(event.target.value)}/>
            </div>
            <div className={notification ? styles.addNotification : `${styles.addNotification} ${styles.hideNotification}`}>
                <p>{movie.title} wurde {notificationText} hinzugefügt</p>
            </div> 
        </>
     );
}
 
export default RatingButton;