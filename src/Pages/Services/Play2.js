import React from 'react'
import play2 from "../../image/services/play2.jpg"
const Play2 = () => {
  return (
    <div class="w-full h-44 bg-base-300">
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
       <div class="lg:col-span-2 col-span-0 mx-auto pt-8">
           <div class="flex">
               <img class="h-28 rounded-full" src={play2}></img>
               <div class="pt-2 lg:pt-7">
               <h1 class="text-black text-2xl ml-4">FIRST SCHOOL DAY</h1>
               <h1 class="text-Black text-lg ml-4">Your mountain is waiting. So get on your way!  </h1>
               </div>
           </div>
       </div>
       <div class="mx-auto pt-16 lg:block hidden" >
       <button class="btn btn-outline border-orange-700 text-black rounded-full border-2 hover:bg-orange-700 hover:border-white hover:text-white">Get Ready</button>
       </div>
    </div>
</div>
  )
}

export default Play2