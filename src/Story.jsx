import React from 'react';
import { Avatar } from '@material-ui/core';
import './Story.css'

const Story = ({profileSrc, title, img}) => {
  return (
    <div style={{backgroundImage :`url(${img})` }} className='story'>
        <Avatar className='story__avatar' src={profileSrc} />
        <h4>{title}</h4>
    </div>
  )
}

export default Story