import React from 'react'
import { useForm } from 'react-hook-form';
const AddGallery = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data =>{ 
    
        const galleryadd={
            img:data.image,
            description:data.description        
          }  
          console.log(galleryadd)
          fetch('http://localhost:5000/gallerydata',{
            method:'POST',
              headers:{
                'content-type':'application/json',
              },
            body:JSON.stringify(galleryadd)
          })
          .then(res=>res.json())
          .then(r=>{
            if(r.success)
            {
              console.log("successfull")
            }
          })       
      
    }
  return (
    <div>
    <div class="flex justify-center items-center mt-7 text-black mb-10">
  <div class="card w-96  shadow-2xl bg-black">
    <div class="card-body">
       <h2 class=" text-4xl text-center text-green-700">Please Add!!!</h2>
       <form onSubmit={handleSubmit(onSubmit)}>
         <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-white">Image Link</span>
       </label>
       <input 
           {...register("image",{
              required:{
                 value:true,
                 message:"Image Link is Required"
                }
            })}     
            type="text" 
            placeholder="Enter Image Link" 
            class="input input-bordered border-green-800 w-full max-w-xs " />
          <label class="label">
          {errors.image?.type === 'required' && <span className="label-text-alt text-red-700">{errors.image.message}</span>}
          </label>
      </div>
      <div className="form-control w-full max-w-xs">
         <label className="label">
          <span className="label-text text-white">Description</span>
         </label>
        <input
        type="textarea"
        placeholder="Enter Details"
      className="input input-bordered border-green-800 w-full max-w-xs"
    {...register("description", {
      required: {
        value: true,
        message: 'Description is Required'
        }
    })}
  />
  <label class="label">
          {errors.description?.type === 'required' && <span className="label-text-alt text-red-700">{errors.description.message}</span>}
          </label>
          
  <input value="Add Gallery Item"class="btn btn-outline border-green-800 w-full max-w-xs text-white" type="submit"/>
  </div>
</form>
</div>
</div>
</div>
 </div>
  )
}

export default AddGallery