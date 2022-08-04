import React from 'react'
import { motion } from "framer-motion"
import school from "../../image/school.jpg"
import Services from '../Services/Services'
import Play from '../Services/Play'
import Play1 from '../Services/Play1'
import Enrollment from '../Services/Enrollment'
import UserContact from '../Contact/UserContact'
import Footer from '../Footer/Footer'
import New from '../Services/New'
import Play2 from '../Services/Play2'
import Event from '../Services/Event'
const Home = () => {
  return (
    <div class="">
   <div class=" w-full h-full bg-no-repeat bg-cover lg:p-20 p-12"style={{backgroundImage:`url(${school})`}}>
     <div class="">
     <h1 class="text-7xl text-orange-700 font-bold text-left">Explore</h1>
     <h1 class="lg:text-5xl text-4xl text-white font-bold lg:mt-6 mt-3">Coral Reef Academy</h1>
     <h1 class="text-xl text-white mt-3">We are making every child world better.</h1>
     <motion.button class=" rounded-lg text-white p-2 shadow-lg mt-6 bg-orange-700 font-bold"
     whileHover={{scale:1.1}}
     transition={{duration:0.5}}>Enroll Now</motion.button>
     </div>
     </div>
     <Play></Play>
     <Services></Services>
     <Play1></Play1>
     <Enrollment></Enrollment>
     <New></New>
     <Play2></Play2>
     <Event></Event>
     <UserContact></UserContact>
 </div>
  )
}

export default Home