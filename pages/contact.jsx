import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const contact = () => {
  return (
    <>
        <Hero heading='CONTACT' message='Please feel free to come to the club or contact a member of our staff directly with any questions, comments, or scheduling inquiries you may have.'/>
        <Contact />
    </>
  )
}

export default contact