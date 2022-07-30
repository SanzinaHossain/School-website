import React from 'react'
import { useForm } from 'react-hook-form';
import p5 from "../../image/services/p5.jpg"
const AddNotice = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let today = new Date().toISOString().slice(0, 10)
    const onSubmit = data =>{ 
      
          const noticeadd={
              tittle:data.tittle,
              date:today,
              noticelink:data.noticelink     
            }  
            console.log(noticeadd)
            fetch('https://dry-temple-93431.herokuapp.com/allnotice',{
              method:'POST',
                headers:{
                  'content-type':'application/json',
                },
              body:JSON.stringify(noticeadd)
            })
            .then(res=>res.json())
            .then(r=>{
              if(r.success)
              {
                 alert("Add notice Successfully")
              }
            })       
        
      }
  return (
    <div class="bg-no-repeat w-full bg-cover"style={{backgroundImage:`url(${p5})`}}>
    <div class="flex justify-center items-center pt-6 text-black pb-10 ">
  <div class="mx-auto shadow-2xl w-96 h-auto rounded-xl bg-black pl-10 pr-10 pb-10 pt-10">
       <h2 class=" text-4xl text-center text-green-700">Add Notice!!!</h2>
       <form onSubmit={handleSubmit(onSubmit)}>
         <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-white">Tittle</span>
       </label>
       <input 
           {...register("tittle",{
              required:{
                 value:true,
                 message:"Tittle is Required"
                }
            })}     
            type="text" 
            placeholder="Enter notice tittle" 
            class="input input-bordered border-green-800 w-full max-w-xs " />
          <label class="label">
          {errors.tittle?.type === 'required' && <span className="label-text-alt text-red-700">{errors.tittle.message}</span>}
          </label>
      </div>
      <div className="form-control w-full max-w-xs">
         <label className="label">
          <span className="label-text text-white">Notice Link</span>
         </label>
        <input
        type="textarea"
        placeholder="Enter Notice Link"
      className="input input-bordered border-green-800 w-full max-w-xs"
    {...register("noticelink", {
      required: {
        value: true,
        message: 'Notice Link is Required'
        }
    })}
  />
  <label class="label">
          {errors.noticelink?.type === 'required' && <span className="label-text-alt text-red-700">{errors.noticelink.message}</span>}
          </label>
          
  <input value="Add New Notice"class="btn btn-outline border-green-800 w-full max-w-xs text-white" type="submit"/>
  </div>
</form>
</div>
</div>
</div>
  )
}

export default AddNotice