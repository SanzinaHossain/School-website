import React from 'react'
import { motion } from "framer-motion"
import school from "../../image/school.jpg"
const Home = () => {
  return (
    <div class="">
   <div class=" w-full h-full bg-no-repeat bg-cover lg:p-20 p-12 lg:mb-56 "style={{backgroundImage:`url(${school})`}}>
     <div class="">
     <h1 class="text-7xl text-orange-700 font-bold text-left">Explore</h1>
     <h1 class="lg:text-5xl text-4xl text-white font-bold lg:mt-6 mt-3">Coral Reef Academy</h1>
     <h1 class="text-xl text-white mt-3"></h1>
     <motion.button class=" rounded-lg text-black p-2 shadow-lg mt-6 bg-orange-700 font-bold"
     whileHover={{scale:1.1}}
     transition={{duration:0.5}}>Admission Now</motion.button>
     </div>
     </div>
 </div>
  )
}

export default Home