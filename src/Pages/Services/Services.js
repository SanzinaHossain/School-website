import React from 'react'
import p1 from "../../image/services/p1.webp"
import p2 from "../../image/services/p2.jpg"
import p3 from "../../image/services/p3.jpg"
import p4 from "../../image/services/p4.jpg"
const Services = () => {
  return (
    <div class='w-full h-auto p-12 mt-8'>
        <h1 class="text-green-600 text-center text-4xl "> Our Services</h1>
        <h1 class="text-black text-center lg:text-xl text-sm">We make your child happy day after day</h1>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-12 mx-8 mt-16">
       <div class="w-64 h-80 bg-white p-7 shadow-2xl pt-12 ">
          <img class=" h-28 mx-auto" src={p1}></img>
          <h1 class="text-2xl text-center text-black pt-4">GREAT FACILITIES</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">A small river named Duden flows by their place and supplies.</h1>
       </div>
       <div class="w-64 h-80 bg-white p-7 shadow-2xl pt-12 ">
          <img class=" h-28 mx-auto" src={p2}></img>
          <h1 class="text-2xl text-center text-black pt-4">SCIENCE LABS</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">A small river named Duden flows by their place and supplies.</h1>
       </div>
       <div class="w-64 h-80 bg-white p-7 shadow-2xl pt-12 ">
          <img class=" h-28 mx-auto" src={p3}></img>
          <h1 class="text-2xl text-center text-black pt-4">SCHOOL BUS</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">A small river named Duden flows by their place and supplies.</h1>
       </div>
       <div class="w-64 h-80 bg-white p-7 shadow-2xl pt-12 ">
          <img class=" h-28 mx-auto" src={p4}></img>
          <h1 class="text-2xl text-center text-black pt-4">INDOOR PLAY</h1>
          <h1 class="text-lg text-gray-700 text-center pt-3">A small river named Duden flows by their place and supplies.</h1>
       </div>
    </div>
 </div>
  )
}

export default Services