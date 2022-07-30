import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import p5 from "../../image/services/p5.jpg"
const UpdateNotice = () => {
    let today = new Date().toISOString().slice(0, 10)
    const {id}=useParams();
    const [notice,setNotice]=useState([])
    useEffect(()=>{
          fetch(`http://localhost:5000/allnotice/${id}`)
          .then(res=>res.json())
          .then(data=>{
              setNotice(data);
          })
    },[])
    const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data =>{ 
    console.log(data)
    if(data.tittle=="")
    {
        data.tittle=notice.tittle;
        console.log(data.tittle)
    }
    if(data.noticelink=="")
    {
        data.noticelink=notice.noticelink;
        console.log(data.noticelink)
    }
    const newnotice={
        date:today,
        tittle:data.tittle,
        noticelink:data.noticelink

    }
    fetch(`http://localhost:5000/allnotice/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(newnotice)
    })
    .then(res=>res.json())
    .then(r=>{
      console.log(r)
      if(r.success)
      {
        alert("Update notice Successfully")
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
           <span class="label-text text-white">Date</span>
       </label>
       <input 
           {...register("date")}     
            type="text" 
            value={today}
            class="input input-bordered border-green-800 w-full max-w-xs " />
      </div>
         <div class="form-control w-full max-w-xs">
       <label class="label">
           <span class="label-text text-white">Tittle</span>
       </label>
       <input 
           {...register("tittle")}     
            type="text" 
            placeholder="Enter notice tittle" 
            class="input input-bordered border-green-800 w-full max-w-xs " />
          
      </div>
      <div className="form-control w-full max-w-xs">
         <label className="label">
          <span className="label-text text-white">Notice Link</span>
         </label>
        <input
        type="textarea"
        placeholder="Enter Notice Link"
      className="input input-bordered border-green-800 w-full max-w-xs"
    {...register("noticelink")}
  />
          
  <input value="Update Notice"class=" mt-4 btn btn-outline border-green-800 w-full max-w-xs text-white" type="submit"/>
  </div>
</form>
</div>
</div>
</div>
  )
}

export default UpdateNotice