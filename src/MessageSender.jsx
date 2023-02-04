import { Avatar } from '@material-ui/core'
import {  EmojiEmotionsRounded, PhotoLibrary, Videocam } from '@material-ui/icons'
import React,{useState} from 'react'
import './MessageSender.css'
import firebase from 'firebase/compat/app'
import {db} from './firebase'

const MessageSender = ({userName, userPic}) => {

    const [input, setInput]=useState('')
    const [imgUrl, setImageUrl]=useState('')


    const handleSubmit=(e)=>{
        e.preventDefault();
        setInput('')
        setImageUrl('')
        db.collection('posts').add({
            message : input,
            image : imgUrl,
            profilePic : userPic,
            username : userName,
            timeStamp :firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    const handleTextInput=(e)=>{
        setInput(e.target.value)
    }

    const handleImgUrlInput=(e)=>{
        setImageUrl(e.target.value)
    }

  return (
    <div className='messageSender'>
        <div className="messageSender__top">
            <Avatar src={userPic}/>
            <form>
                <input className='messageSender__input' placeholder={'whats on your mind ' + userName} value={input} onChange={handleTextInput}/>
                <input placeholder='img url(optional)' className='url__opt' value={imgUrl} onChange={handleImgUrlInput}/>
                <button type='submit' onClick={handleSubmit}>hidden button</button>
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <Videocam style={{color : 'red'}}/>
                <h4>Live Video</h4>
            </div>
            <div className="messageSender__option">
                <PhotoLibrary style={{color : 'green'}}/>
                <h4>Photo/video</h4>
            </div>
            <div className="messageSender__option">
                <EmojiEmotionsRounded style={{color : 'orange'}}/>
                <h4>Feeling/actvities</h4>
            </div>
        </div>
    </div>
  )
}

export default MessageSender