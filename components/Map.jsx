import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import location from '../public/assets/THCLocation.png'
import {MdLocationPin} from 'react-icons/md'


const Map = () => {
  return (
    <section>
  <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div className="relative lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src={location}
            alt="Location of Club"
          />
        </div>
      </div>

      <div className="relative flex items-center md:max-h-[500px] bg-gray-100">


        <div className="p-8 sm:p-16 lg:p-24 hover:cursor-pointer">
          <Link href='https://www.google.com/search?q=C.+Roque+Nublo%2C+38%2C+35518+Tias&biw=1346&bih=822&hotel_occupancy=2&tbm=lcl&sxsrf=ALiCzsaeBQo8pSMDwjoVa-SeFtsxlxdOlA%3A1658330311238&ei=xxzYYqeMDteExc8Pi4Cf2A0&oq=C.+Roque+Nublo%2C+38%2C+35518+Tias&gs_l=psy-ab.3...0.0.0.15984.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.QkjKKeXoJOg' className="text-2xl font-bold sm:text-3xl">
            Find us on Google Maps
          </Link>

          <h4 className="mt-4 text-gray-600">
         <MdLocationPin /> C. Roque Nublo, 38, 35518 Tias
          </h4>

          <a className="inline-flex items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent active:text-green-500 focus:outline-none focus:ring">

              
          <Link
            
            href="https://www.google.com/search?q=C.+Roque+Nublo%2C+38%2C+35518+Tias&biw=1346&bih=822&hotel_occupancy=2&tbm=lcl&sxsrf=ALiCzsaeBQo8pSMDwjoVa-SeFtsxlxdOlA%3A1658330311238&ei=xxzYYqeMDteExc8Pi4Cf2A0&oq=C.+Roque+Nublo%2C+38%2C+35518+Tias&gs_l=psy-ab.3...0.0.0.15984.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.QkjKKeXoJOg"
          >
            Take me to Maps
          </Link>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Map