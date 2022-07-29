import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import p5 from "../../image/services/p5.jpg"
import { useForm } from 'react-hook-form';
const UpdateGallery = () => {
    const {id}=useParams();
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
          fetch(`http://localhost:5000/gallerydata/${id}`)
          .then(res=>res.json())
          .then(data=>{
              setGallery(data);
          })
    },[])
    const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data =>{ 
    console.log(data)
    if(data.description=="")
    {
        data.description=gallery.description;
        console.log(data.description)
    }
    if(data.image=="")
    {
        data.image=gallery.img;
        console.log(data.image)
    }
    const newgallery={
        img:data.image,
        description:data.description

    }
    fetch(`http://localhost:5000/gallerydata/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(newgallery)
    })
    .then(res=>res.json())
    .then(r=>{
      console.log(r)
      if(r.success)
      {
        console.log("successful")
      }
    })
  }
         
  return (
    <div class="bg-no-repeat w-full bg-cover"style={{backgroundImage:`url(${p5})`}}>
    <div class="flex justify-center items-center pt-6 text-black pb-10 ">
  <div class="card w-96  shadow-2xl bg-black">
    <div class="card-body">
       <h2 class=" text-4xl text-center text-green-700">Please Update!!!</h2>
       <form onSubmit={handleSubmit(onSubmit)}>
         <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-white">Gallery ID</span>
       </label>
       <input 
           {...register("id")}     
            type="text" 
            value={id}
            class="input input-bordered border-green-800 w-full max-w-xs " />
          <label class="label">
          {errors.image?.type === 'required' && <span className="label-text-alt text-red-700">{errors.image.message}</span>}
          </label>
      </div>
      <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-white">Image Link</span>
       </label>
       <input 
           {...register("image")}     
            type="text" 
            placeholder="Enter Image Link" 
            class="input input-bordered border-green-800 w-full max-w-xs " />
      </div>
      <div className="form-control w-full max-w-xs">
         <label className="label">
          <span className="label-text text-white">Description</span>
         </label>
        <input
        type="textarea"
        placeholder="Enter Details"
      className="input input-bordered border-green-800 w-full max-w-xs"
    {...register("description")}
  />
          
  <input value="Update Gallery Item"class="btn btn-outline border-green-800 w-full max-w-xs text-white mt-4" type="submit"/>
  </div>
</form>
</div>
</div>
</div>
</div>
  )
}

export default UpdateGallery