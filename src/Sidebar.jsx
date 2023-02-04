import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

const Sidebar = ({userPic, userName}) => {
  return (
    <div className='sidebar'>
        <SidebarRow title={userName} Icon={Avatar}/>
        <SidebarRow Icon={LocalHospital} title='covid-19'/>
        <SidebarRow Icon={EmojiFlags} title='pages'/>
        <SidebarRow Icon={People} title='friends'/>
        <SidebarRow Icon={Chat} title='messanger'/>
        <SidebarRow Icon={Storefront} title='Marketplace'/>
        <SidebarRow Icon={VideoLibrary} title='videos'/>
        <SidebarRow Icon={People} title='friends'/>
        <SidebarRow Icon={ExpandMoreOutlined} title='marketplace'/>
    </div>
  )
}

export default Sidebar