import React from 'react'
import play1 from "../../image/services/play1.jpg"

const Play1 = () => {
  return (
    <div class="w-full h-44 bg-sky-900">
         <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div class="lg:col-span-2 col-span-0 mx-auto pt-8">
                <div class="flex">
                    <img class="h-28 rounded-full" src={play1}></img>
                    <div class="pt-2 lg:pt-7">
                    <h1 class="text-white text-2xl ml-4">TAKE THE FIRST STEP</h1>
                    <h1 class="text-white text-lg ml-4">A world of learners where children gain a passport to the world </h1>
                    </div>
                </div>
            </div>
            <div class="mx-auto pt-16" >
            <button class="btn btn-outline border-white text-white rounded-full border-2 hover:bg-white hover:border-white hover:text-black">Contact Us</button>
            </div>
         </div>
    </div>
  )
}

export default Play1