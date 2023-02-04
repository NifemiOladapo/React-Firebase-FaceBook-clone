import React from 'react'
import './Login.css'
import logo from './facebooklogo.png'
import textlogo from './facebooktextlogo.png'
import { Button } from '@material-ui/core'
import {auth, provider} from './firebase'


const Login = ({user, setUser, setUserName, setUserPic}) => {
    const signin=()=>{
      auth.signInWithPopup(provider)
      .then((result)=>{
        setUser('signed in')
        console.log(result)
        setUserName(result.additionalUserInfo.profile.name)
        setUserPic(result.additionalUserInfo.profile.picture)
        console.log(result.additionalUserInfo.profile.name)
      })
      .catch((error)=>{
        console.log(error.message)
      })
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img  src={logo} alt="" />
            <img  src={textlogo} alt="" />
        </div>
        <Button onClick={signin}>Sign in</Button>
    </div>
  )
}

export default Login