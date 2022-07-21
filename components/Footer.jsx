import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    
<div className="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center hover:underline self-center">
                
                <h1 className='text-2xl font-semibold whitespace-nowrap text-green-500 cursor-pointer'>THC Lanzarote CSC</h1>
            </Link>
            
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li>
                        <Link href="/contact" className="hover:underline">Contact</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">About</Link>
                    </li>
                    <li>
                        <Link href="/#gallery" className="hover:underline">Gallery</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-600 dark:text-gray-400 flex-auto">
                    <li>
                        <Link href="https://instagram.com/thc_lanzarotecsc?igshid=YmMyMTA2M2Y=" className="hover:underline ">Instagram</Link>
                    </li>
                    <li>
                        <Link href="https://vm.tiktok.com/ZSRLrBoc6/" className="hover:underline">TikTok</Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/thclanzarote/" className="hover:underline">Facebook</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li >
                        <Link href="/#faq" className="hover:underline">FAQ</Link>
                    </li>
                    <li>
                        <Link href="https://weed-away.com/content/lanzarote/" className="hover:underline">Lanzarote Cannabis Law</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="https://evanmeleady.vercel.app" className="hover:underline">Evan Meleady, Developer</Link>. All Rights Reserved.
        </span>

</div>

  )
}

export default Footer