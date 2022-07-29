import React from 'react'
import { useForm } from 'react-hook-form';
const UserContact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data =>{ 
    const m={
        name:data.name,
        mobile:data.mobile,
        message:data.mes
    }
    fetch('http://localhost:5000/usercontact',{
            method:'POST',
              headers:{
                'content-type':'application/json',
              },
            body:JSON.stringify(m)
          })
          .then(res=>res.json())
          .then(r=>{
            if(r.success)
            {
               alert("Message Send successfully")
            }
          })      
  }
  return (
    <div class="bg-orange-200 w-full bg-cover">
        <h1 className='text-center text-black text-xl pt-7'>Give Your Feedback</h1>
   <h1 className="text-center bold text-3xl lg:text-4xl mb-9 text-black pt-3">Stay Connected With Us</h1>
    <div class="flex justify-center items-center pt-6 text-black pb-10 ">
  <div class="mx-auto shadow-2xl w-96 h-auto rounded-xl  pl-10 pr-10 pb-10 pt-10 bg-black">
       <form onSubmit={handleSubmit(onSubmit)}>
         <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-white">Name</span>
       </label>
       <input 
           {...register("name",{
              required:{
                 value:true,
                 message:"Name is required"
                }
            })}     
            type="text" 
            placeholder="Enter Your name" 
            class="input input-bordered border-green-800 w-full max-w-xs " />
          <label class="label">
          {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
          </label>
      </div>
      <div className="form-control w-full max-w-xs">
         <label className="label">
          <span className="label-text text-white">Mobile No</span>
         </label>
        <input
        type="textarea"
        placeholder="Enter Mobile Number"
      className="input input-bordered border-green-800 w-full max-w-xs"
    {...register("mobile", {
      required: {
        value: true,
        message: 'Phone is Required'
        }
    })}
  />
  <label class="label">
          {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-700">{errors.mobile.message}</span>}
          </label>
          <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-white">Message</span>
       </label>
       <input 
           {...register("mes",{
              required:{
                 value:true,
                 message:"Message is required"
                }
            })}     
            type="text" 
            placeholder="Enter Your Message" 
            class="input input-bordered border-green-800 w-full max-w-xs " />
          <label class="label">
          {errors.mes?.type === 'required' && <span className="label-text-alt text-red-700">{errors.mes.message}</span>}
          </label>
      </div>
  <input value="Send"class="btn btn-outline border-green-800 w-full max-w-xs text-white" type="submit"/>
  </div>
</form>
</div>
</div>
</div>
  )
}

export default UserContact