import React from 'react'
import InstagramImg from './InstagramImg'
import IgImg1 from '../public/assets/thcL1.jpg'
import IgImg2 from '../public/assets/thcL2.jpg'
import IgImg3 from '../public/assets/thcL3.jpg'
import IgImg4 from '../public/assets/thcL4.jpg'
import IgImg5 from '../public/assets/thcL5.jpg'
import IgImg6 from '../public/assets/thcL6.jpg'
import IgImg7 from '../public/assets/thcL7.jpg'
import IgImg8 from '../public/assets/thcL8.jpg'
import IgImg9 from '../public/assets/thcL9.jpg'
import IgImg10 from '../public/assets/thcL10.jpg'
import IgImg11 from '../public/assets/thcL11.jpg'
import IgImg12 from '../public/assets/thcL12.jpg'
import IgImg13 from '../public/assets/thcL13.jpg'
import IgImg14 from '../public/assets/thcL14.jpg'
import IgImg15 from '../public/assets/thcL15.jpg'
import IgImg16 from '../public/assets/thcL16.jpg'
import IgImg17 from '../public/assets/thcL17.jpg'
import IgImg18 from '../public/assets/thcL18.jpg'
import IgImg19 from '../public/assets/thcL19.jpg'
import IgImg20 from '../public/assets/thcL20.jpg'
import Link from 'next/link'


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <h4 className='text-2xl text-green-600 font-bold'>Follow us on Instagram</h4>
        <p className="hover:underline text-orange-500">
        <Link href="https://instagram.com/thc_lanzarotecsc?igshid=YmMyMTA2M2Y=" >@thc_lanzarotecsc</Link></p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg12} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
            <InstagramImg socialImg={IgImg7} />
            <InstagramImg socialImg={IgImg8} />
            <InstagramImg socialImg={IgImg9} />
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg11} />
            <InstagramImg socialImg={IgImg10} />
            <InstagramImg socialImg={IgImg13} />
            <InstagramImg socialImg={IgImg14} />
            <InstagramImg socialImg={IgImg16} />
            <InstagramImg socialImg={IgImg17} />
            <InstagramImg socialImg={IgImg18} />
            <InstagramImg socialImg={IgImg19} />
        </div>
        
    </div>
  )
}

export default Instagram