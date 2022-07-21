import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Map from '../components/Map'
import Footer from '../components/Footer'

const about = () => {
  return (
        <>
        <Hero heading='ABOUT US' message='All the information you need on our modern Cannabis Club.'/>
        <Info />
        <Map />
        </>
    
  )
}

export default about