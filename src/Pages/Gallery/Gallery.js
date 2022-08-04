import React, { useEffect } from 'react'
import SingleGallery from './SingleGallery'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { setgallery } from '../../Redux/Actions/GalleryAction'
const Gallery = () => {
 //redux store
  const dispatch=useDispatch();
  const g = useSelector((state) => state.allGallery.gallerys);
    useEffect(()=>{
          fetch("https://dry-temple-93431.herokuapp.com/gallerydata")
          .then(res=>res.json())
          .then(data=>{
              dispatch(setgallery(data))
          })
    },[])
    console.log(g)
  return (
    <div class=" bg-violet-200 pt-8">
        <h1 class="text-orange-700 text-center text-4xl font-bold ">School Gallery</h1>
       <h1 class="text-black text-center lg:text-xl text-sm">Steps done with heart, soul, mind & strength</h1>
        <div class="grid lg:grid-cols-3 gap-5 lg:ml-24 ml-12 md:grid-cols-2 grid-cols-1 justify-center pt-12 pb-12">
        {
            g.map(g1=><SingleGallery
             g1={g1}
            ></SingleGallery>)
        }
        </div>
    </div>
  )
}

export default Gallery