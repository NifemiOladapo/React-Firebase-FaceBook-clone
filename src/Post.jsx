import { Avatar } from '@material-ui/core'
import { ThumbUp, ThumbDown, Share, NearMe, ChatBubbleOutline, ExpandMoreOutlined, AccountCircle } from '@material-ui/icons'
import React from 'react'
import './Post.css'

const Post = ({ timeStamp, profilePic, img, userName, message }) => {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar className='post__avatar' src={profilePic} />
                <div className="post__topInfo">
                    <h3>{userName}</h3>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={img} />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post