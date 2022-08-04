import React from 'react'
import play from "../../image/services/play.webp"
const Play = () => {
  return (
    <div class="w-full h-44 bg-sky-900 lg:block ">
         <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div class="col-span-2 mx-auto pt-8">
                <div class="flex">
                    <img class="h-28 rounded-full" src={play}></img>
                    <div class="lg:pt-7 pt-2">
                    <h1 class="text-white text-2xl ml-4">ENROLL A CHILD</h1>
                    <h1 class="text-white text-lg ml-4">We provide the perfect education for your child every day </h1>
                    </div>
                </div>
            </div>
            <div class="mx-auto pt-16 lg:block hidden" >
            <button class="btn btn-outline border-white text-white rounded-full border-2 hover:bg-white hover:border-white hover:text-black">Contact Us</button>
            </div>
         </div>
    </div>
  )
}

export default Play