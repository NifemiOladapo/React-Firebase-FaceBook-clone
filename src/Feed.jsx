import React from 'react';
import StoryReel from './StoryReel';
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post'
import img from './pic4.jpg'
import profilePic from './pic3.jpeg'
import {db} from './firebase'
import { useEffect, useState } from 'react';

const Feed = ({userName, userPic}) => {
  const [posts, setPosts]=useState([])
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>{
        // console.log(doc)
        return ({id : doc.id, data : doc.data() })
      }))
      // console.log(snapshot.docs)
    })
  }, [])

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender userName={userName} userPic={userPic}/>
        {
          posts.map(post=>{
            // console.log(post)
            return (<Post id={post.id} timeStamp={post.data.timeStamp} userName={post.data.username} message={post.data.message} profilePic={post.data.profilePic} img={post.data.image}/>)
            // console.log(post.data) 
          })
        }
        

        {/* <Post />
        <Post />
        <Post /> */}
    </div>
  )
}

export default Feed