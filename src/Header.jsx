import React from 'react'
import './Header.css'
import logo from './facebooklogo.png'
import {Search, Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle , Add, Forum, NotificationsActive, ExpandMore} from '@material-ui/icons'
import { IconButton, Avatar } from '@material-ui/core'

const Header = ({userName, userPic}) => {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={logo} alt="logo" />
            <div className="header__input">
                <Search />
                <input placeholder='Search flexbook'/>
            </div>
        </div>
        <div className="header__center">
            <div className="header__option header__option--active">
                <Home />
            </div>
            <div className="header__option">
                <Flag />
            </div>
            <div className="header__option">
                < SubscriptionsOutlined/>
            </div>
            <div className="header__option">
                <StorefrontOutlined />
            </div>
            <div className="header__option">
                <SupervisedUserCircle />
            </div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar src={userPic}/>
                <h4>{userName}</h4>
            </div>
            <IconButton>
                <Add />
            </IconButton>
            <IconButton>
                <Forum />
            </IconButton>
            <IconButton>
                <NotificationsActive />
            </IconButton>
            <IconButton>
                <ExpandMore />
            </IconButton>
        </div>

    </div>
  )
}

export default Header