import React from 'react'
import p1 from "../../image/services/address.jpg"
import p2 from "../../image/services/phone.jpg"
import p3 from "../../image/services/hour.jpg"
import p4 from "../../image/services/hour.webp"
const ContactDetails = () => {
  return (
   <div class="mt-16 mb-10">
        <h1 class="text-orange-800 text-3xl text-center font-bold">OUR CONTACT INFO</h1>
        <h1 class="text-black text-lg text-center">We do all the work, you get all the credit</h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-12 mx-8 mt-8">
       <div class="w-64 h-80 p-7 pt-12 ">
         <img class=" pl-1 pr-1 rounded-full border-2 border-gray-300 h-28 mx-auto w-28" src={p1}></img>
          <h1 class="text-2xl text-center text-orange-600 pt-4">ADDRESS</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">Reef Academy,12-14 Kensington High Street London, UK</h1>
       </div>
       <div class="w-64 h-80  pt-12 ">
          <img class="pl-1 pr-1 rounded-full border-2 border-gray-300 h-28 w-28 mx-auto" src={p2}></img>
          <h1 class="text-2xl text-center text-orange-600 pt-4">PHONE & EMAIL</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">+123456 7890</h1>
          <h1 class="text-lg text-gray-700 text-center">0987654321</h1>
          <h1 class="text-lg text-gray-700 text-center ">contact@zoutula.com</h1>
       </div>
       <div class="w-64 h-80  p-7  pt-12 ">
          <img class=" pl-1 pr-1 h-28 mx-auto rounded-full border-2 border-gray-300 w-28" src={p3}></img>
          <h1 class=" text-2xl text-center text-orange-600 pt-4">BUSINESS HOURS</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">Monday-Friday</h1>
          <h1 class="text-lg text-gray-700 text-center">8.00 am – 6.00 pm</h1>
          <h1 class="text-lg text-gray-700 text-center ">Weekend Closed</h1>
       </div>
       <div class="w-64 h-80  p-7  pt-12 ">
          <img class=" pl-1 pr-1 w-28 h-28 mx-auto rounded-full border-2 border-gray-300" src={p4}></img>
          <h1 class="text-2xl text-center text-orange-600 pt-4">REEF HOURS</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">Monday-Friday</h1>
          <h1 class="text-lg text-gray-700 text-center">8.00 am – 6.00 pm</h1>
          <h1 class="text-lg text-gray-700 text-center ">Weekend Closed</h1>
       </div>
    </div>
   </div>
  )
}

export default ContactDetails