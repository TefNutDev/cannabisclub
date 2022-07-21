import Image from "next/image";
import React from "react";
import Link from "next/link";
import iconBud from '../public/icons/bud.png'
import iconChill from '../public/icons/chill.png'
import iconSport from '../public/icons/livesport.png'
import iconMed from '../public/icons/medical.png'
import iconPool from '../public/icons/pool.png'
import iconCafe from '../public/icons/cafe.png'

const Info = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center">
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">THC Lanzarote</h2>

            <h4 className="mt-4 text-gray-300">
              A small group of marijuana enthusiasts who can&apos;t stop growing.
              Find our cannabis social club and cannabis dispensary in Puerto
              del Carmen, Lanzarote.
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-orange-500/10 hover:border-orange-500/10"
             
            >
             <Image src={iconMed} alt='/' width={60} height={60} />

              <h3 className="mt-4 text-xl font-bold text-white">
                Medical Cannabis
              </h3>

              <h4 className="mt-1 text-sm text-gray-300">
                We offer a broad array of cannabis products and services geared
                to address illnesses and injuries. Our multilingual team will
                guide you through your options to make sure that you are
                comfortable with the products.
              </h4>
            </div>

            <div
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-orange-500/10 hover:border-orange-500/10"
              
            >
                <Image src={iconBud} alt='/' width={60} height={60} />

              <h3 className="mt-4 text-xl font-bold text-white">
                Recreational Cannabis
              </h3>

              <h4 className="mt-1 text-sm text-gray-300">
                We believe that good marijuana is worth the wait, so we only
                hand pick the best strains for our members. We are dedicated to
                providing a relaxed atmosphere and a fun environment for
                everyone to enjoy their smoke.
              </h4>
            </div>

            <div
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-orange-500/10 hover:border-orange-500/10"
              
            >
            <Image src={iconChill} alt='/' width={60} height={60} />

              <h3 className="mt-4 text-xl font-bold text-white">Chill Out</h3>

              <h4 className="mt-1 text-sm text-gray-300">
                Comfort is key when you&apos;re smoking your favourite herb. We have
                multiple seating sections with beanbags, swinging chairs and
                sofas. Enjoy your cannabis in our top of the range Cannabis
                Club.
              </h4>
            </div>

            <div
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-orange-500/10 hover:border-orange-500/10"
              
            >
            <Image src={iconSport} alt='/' width={60} height={60} />

              <h3 className="mt-4 text-xl font-bold text-white">
                Live Sports & Entertainment
              </h3>

              <h4 className="mt-1 text-sm text-gray-300">
                10+ Flatscreen TVs. Whether it be The FIFA World Cup or Love
                Island, we show whatever our customers want to see. Premier
                League Football, La Liga, GAA, The Simpsons, Classic Movies and
                the list goes on.
              </h4>
            </div>

            <div
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-orange-500/10 hover:border-orange-500/10"
              
            >
            <Image src={iconCafe} alt='/' width={60} height={60} />

              <h3 className="mt-4 text-xl font-bold text-white">
                Cafe & Snacks
              </h3>

              <h4 className="mt-1 text-sm text-gray-300">
                We have a huge range of snacks to satisfy your munchies! We have
                Milkshakes, Cereal, Capri Suns, Fizzy Drinks and some Irish
                staples: Tayto, King Hunky Dorrys & much more!
              </h4>
            </div>

            <div
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-orange-500/10 hover:border-orange-500/10"
              
            >
            <Image src={iconPool} alt='/' width={60} height={60} />

              <h3 className="mt-4 text-xl font-bold text-white">
                Pool Table & Game Consoles
              </h3>

              <h4 className="mt-1 text-sm text-gray-300">
                Brand new PS5s, Pool Tables, Wifi, HD TV&apos;s. Enjoy every moment
                of your time at our club!
              </h4>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a className="inline-flex items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent active:text-green-500 focus:outline-none focus:ring">
              <Link href="/contact" className="text-sm font-medium">
                
                Become a Member
              </Link>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <h1 id="faq" className="font-bold text-2xl p-10">F.A.Q</h1>
      <div className="space-y-3">
        <details className="group max-w-[340px] sm:max-w-[480px] md:max-w-[740px] mx-auto text-center py-1">
        <summary className="flex items-start justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              What are the requirements to become a member?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <ul className="flex-rows-4 justify-center leading-relaxed text-gray-900">
          <li className="list-disc text-start py-2 mx-auto font-bold">You must be over the age of 18</li>
          <li className="list-disc text-start py-2 mx-auto font-bold">You must have Valid Goverment Issued I.D</li>
          <li className="list-disc text-start py-2 mx-auto font-bold">Registration Forms must be filled out on arrival</li>
          <li className="list-disc text-start py-2 mx-auto font-bold">Membership Fee must be paid on entry. No exceptions.</li>
          </ul>
        </details>
        <details className="group max-w-[340px] sm:max-w-[480px] md:max-w-[740px] mx-auto text-center">
        <summary className="flex items-start justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              Do you have Wifi available at the Club?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <h4 className="flex-rows-4 justify-center leading-relaxed text-gray-900 py-2 font-bold">
                Yes we have High-Speed Wifi available to our members. Just ask a member of staff for the password.
          </h4>
        </details>
        <details className="group max-w-[340px] sm:max-w-[480px] md:max-w-[740px] mx-auto text-center" >
          <summary className="flex items-start justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              How much does it cost to become a member?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <h4 className="flex-rows-4 justify-center leading-relaxed text-gray-900 py-2 font-bold">
                Currently the membership fee is 20 Euro per Year.
          </h4>
        </details>
        <details className="group max-w-[340px] sm:max-w-[480px] md:max-w-[740px] mx-auto text-center" >
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              Do you accept Credit/Debit Card?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <h4 className="flex-rows-4 justify-center leading-relaxed text-gray-900 py-2 font-bold">
                Yes. Memberships, donations and purchases from our Cafe can be paid via card.
          </h4>
        </details>
        <details className="group max-w-[340px] sm:max-w-[480px] md:max-w-[740px] mx-auto text-center">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              I think I might have lost something in the club can you find it?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <h4 className="flex-rows-4 justify-center leading-relaxed text-gray-900 py-2 font-bold">
                Any lost items that we come across or are handed in by members we will keep in a safe location until the owner comes forward with an acceptable description of the item.
          </h4>
        </details>

        
      </div>
    </div>
  );
};

export default Info;
