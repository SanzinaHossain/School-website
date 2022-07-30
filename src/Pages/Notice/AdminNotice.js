import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingleAdminNotice from './SingleAdminNotice'

const AdminNotice = () => {
    const [notice,setNotice]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
          fetch("http://localhost:5000/allnotice")
          .then(res=>res.json())
          .then(data=>{
              setNotice(data);
          })
    },[])
    const addnotice=()=>{
        navigate("/addnotice")
     }
  return (
    <div className='bg-base-300'>
    <h1 className='text-center text-4xl text-green-700 font-bold pt-7'>Notice Board</h1>
       <div class=" flex justify-center mt-5">
       
       <button onClick={()=>addnotice()} class="btn btn-outline border-green-500 text-black rounded-full border-2 hover:bg-green-400 hover:text-black hover:border-green-400">Create New Notice</button>
       </div>
    <div class="overflow-x-auto mt-8">
<table class="lg:table-fixed w-full border-collapse border border-slate-400">
<thead>
  <tr>
    <th>No</th>
    <th>Date</th>
    <th>Tittle</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {
      notice.map((n,index)=>
      <SingleAdminNotice
          value={index+1}
          n={n}
      ></SingleAdminNotice>
        )
  }
</tbody>
</table>
</div>
    </div>
  )
}

export default AdminNotice