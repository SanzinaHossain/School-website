import React from 'react'
import school from "../../image/school.jpg"
const New = () => {
  return (
    <div class="mb-10 mt-5">
        <h1 class="text-orange-800 text-3xl text-center font-bold">WHAT'S NEW</h1>
        <h1 class="text-black text-lg text-center">Keep up to date with the latest news</h1>
       <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:mx-12 mx-7 h-full mt-10">
         <div class='w-96 lg:h-full h-auto'>
            <div class=''>
                <img class="w-full h-64" src="https://www.ptotoday.com/images/articles/body/0319-school-events-you-love-most-fun-run-body.jpg" ></img>
            </div>
            <div class="w-full">
               <h1 class="text-lg mt-3"><span class="text-4xl text-orange-700 font-bold">12/</span>Januaray</h1>
               <h1 class="text-3xl text-sky-900 mt-3">Play Is Our Brain Favourite Way Of Learning</h1>
               <p class="text-black text-xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptatum praesentium explicabo....</p>
            </div>
         </div>
         <div class='w-96 lg:h-full h-auto'>
            <div class=''>
                <img class="w-full h-64" src="https://assets-global.website-files.com/56b2d0222988c4230fc7de41/622be8b56e8d793e980a5dcd_conner-baker-7FC-84Ap_IU-unsplash.jpg" ></img>
            </div>
            <div>
               <h1 class="text-lg mt-3"><span class="text-4xl text-orange-700 font-bold">27/</span>December</h1>
               <h1 class="text-3xl text-sky-900 mt-3">Where Well Rounded Starts With Well Educated</h1>
               <p class="text-black text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptatum praesentium explicabo....</p>
            </div>
         </div>
         <div class='w-96 lg:h-full h-auto'>
            <div class=''>
                <img class="w-full h-64" src="https://www.ptotoday.com/images/articles/body/0319-school-events-you-love-most-family-dance-body.jpg" ></img>
            </div>
            <div>
               <h1 class="text-lg mt-3"><span class="text-4xl text-orange-700 font-bold">27/</span>September</h1>
               <h1 class="text-3xl text-sky-900 mt-3">An Inspired approach To Education</h1>
               <p class="text-black text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptatum praesentium explicabo....</p>
            </div>
         </div>
       </div>
       <div class="flex justify-center mt-8">
       <button class="btn btn-outline border-orange-700 text-Black  rounded-full border-2 hover:bg-orange-700 hover:border-white hover:text-white hover:font-bold">Go To Blog</button>
       </div>
    </div>
  )
}

export default New