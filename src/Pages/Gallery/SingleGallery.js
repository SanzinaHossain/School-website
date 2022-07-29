import React from 'react'

const SingleGallery = ({g}) => {
    const {img,description}=g;
  return (
    <div class="card relative w-80 bg-base-100 shadow-xl">
    <figure><img class="w-full h-56" src={img} alt="Shoes" /></figure>
    <div class="card-body text-black">
      <h2 class=" text-xl text-justify">{description}</h2>
    </div>
  </div>
  )
}

export default SingleGallery