import React from 'react'
import NavBar from '../Components/NavBar';
import Students from '../Components/Students';
import AddAnnouncement from './AddAnnouncement';
import AddGroup from './AddGroup';


const Home = () => {

  return (
    <div>
        <NavBar></NavBar>
        <Students></Students>
    </div>
  )
}

export default Home