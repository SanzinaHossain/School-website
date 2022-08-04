import React from 'react'
import { motion } from "framer-motion"
import "./SingleGallery.css"
const SingleGallery = ({g1}) => {
    const {img,description}=g1;
  return (
  <div class="flip-card ">
          <div class="flip-card-inner ">
            <div class="flip-card-front ">
                <img class="image" src={img} alt="Shoes" />
            </div>
            <div class="flip-card-back text-white text-center  bg-black pt-10">
                <p class="text-xl">{description}</p>
                <button class="mt-4 btn btn-outline border-orange-700 text-white rounded-full border-2 hover:bg-orange-700 hover:border-orange-700 font-bold">Details</button>
            </div>
          </div>
    </div>
  )
}

export default SingleGallery