import React from "react";
import Image from "next/image";
import {
  AiOutlineArrowUp,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import Link from "next/link";
import appointment from "../public/assets/thcL1.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h4 className="text-2xl py-4 tracking-widest uppercase text-[#4bb431]">
          Contact
        </h4>
        
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-green-500 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-md"
                  src={appointment}
                  alt="/"
                  width="500"
                  height="500"
                />
              </div>
              <div>
                <h2 className="py-2">THC Lanzarote</h2>
                <h4>Cannabis Connoisseur of the Canary Islands</h4>
                <h4 className="py-4">
                  Finest Quality Cannabis exclusive to our members. Want to
                  join? Contact us now!
                </h4>
              </div>
              <div>
                <h4 className="uppercase pt-8">
                  The Highgrade Collective Cannabis Social Club
                </h4>
                <div className="flex items-center justify-between py-4">
                  <h4>
                    Please feel free to come to the club or contact a member of
                    our staff directly with any questions, comments, or
                    scheduling inquiries you may have. Feel free to email any
                    documents to us info@thclanzarote.com before you arrive to
                    sign up.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-lg shadow-green-500 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/3e32212d-5084-41ec-905f-09122af7aa36"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="email"
                    name="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-400"
                    rows={10}
                  ></textarea>
                </div>
                <button type="submit" className="w-full p-4 text-gray-900 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-green-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineArrowUp className="text-[#63d942]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
