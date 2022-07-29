import React, { useEffect, useState } from 'react'
import SingleGallery from './SingleGallery'
import Classroom from "../../image/services/Classroom.webp"
const Gallery = () => {
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
          fetch("http://localhost:5000/gallerydata")
          .then(res=>res.json())
          .then(data=>{
              setGallery(data);
          })
    },[])
  return (
    <div class=" bg-violet-200 pt-8">
        <h1 class="text-4xl text-center text-blue-700 font-bold"> School Gallery</h1>
        <div class="grid lg:grid-cols-3 gap-5 lg:ml-24 ml-12 md:grid-cols-2 grid-cols-1 justify-center pt-12 pb-12">
        {
            gallery.map(g=><SingleGallery
            key={g._id}
             g={g}
            ></SingleGallery>)
        }
        </div>
    </div>
  )
}

export default Gallery