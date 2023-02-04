import React from 'react';
import Story from './Story';
import './storyReel.css'
import logo from './logo..jpeg'
import pic from './pic.jpeg'
import pic2 from './pic2.jpeg'
import pic3 from './pic3.jpeg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.PNG'
import pic6 from './pic6.PNG'

const StoryReel = () => {
  return (
    <div className='story__reel'>
        <Story title='Nifemi' profileSrc={pic3} img={pic5}/>
        <Story title='Kolawole' profileSrc={logo} img={logo}/>
        <Story title='Damilola' profileSrc={pic} img={pic}/>
        <Story title='Modupe' profileSrc={pic2} img={pic6}/>
        <Story title='Andrei' profileSrc={pic4} img={pic4}/>
    </div>
  )
}

export default StoryReel