import React, { useEffect, useState } from 'react'
import SingleAdminGallery from './SingleAdminGallery'
import {useNavigate } from 'react-router-dom'
const AdminGallery = () => {
     const navigate=useNavigate();
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
          fetch("http://localhost:5000/gallerydata")
          .then(res=>res.json())
          .then(data=>{
              setGallery(data);
          })
    },[])
    const addGallery=()=>{
       navigate("/addgallery")
    }
  return (
    <div className='bg-base-300'>
        <h1 className='text-center text-3xl text-green-700 font-bold pt-7'>Gallery Management</h1>
       <div class=" flex justify-center mt-5">
       
       <button onClick={()=>addGallery()} class="btn btn-outline border-green-500 text-black rounded-full border-2 hover:bg-green-400 hover:text-black hover:border-green-400">Create New</button>
       </div>
        <div class="overflow-x-auto mt-8">
  <table class="lg:table-fixed w-full border-collapse border border-slate-400">
    <thead>
      <tr>
        <th>ID</th>
        <th>Image Link</th>
        <th>Description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
          gallery.map(g=>
          <SingleAdminGallery
              g={g}
          ></SingleAdminGallery>
            )
      }
    </tbody>
  </table>
</div>
        </div>
  )
}

export default AdminGallery