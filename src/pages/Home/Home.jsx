import React from 'react'
import Navabar from '../../components/Navbar/Navabar'
import OfferNdWelcomeBar from '../../components/OfferNdWelcomeBar/OfferNdWelcomeBar'

const Home = () => {
  return (
    <>
        <OfferNdWelcomeBar/>
        <Navabar/>
        <div>This is Home page</div>
    </>
  )
}

export default Home