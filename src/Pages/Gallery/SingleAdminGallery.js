import React from 'react'
import {useNavigate} from "react-router-dom"
const SingleAdminGallery = ({g}) => {
    const navigate=useNavigate();
    const {_id,img,description}=g;
    const gallerydelete=(id)=>{
        console.log(id);
        const proceed=window.confirm('Are you sure?')
      if(proceed)
      {
          const url=`http://localhost:5000/gallerydata/${id}`;
          fetch(url,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            alert("Delete Items Successfully")
              window.location.reload()
          })
        }
    }
    const galleryupdate=(id)=>{
       navigate(`/updategallery/${id}`)
    }
  return (
    <tr class="w-full border border-slate-300 ">
        <td class="text-black border border-slate-300 h-auto p-5" >{_id}</td>
        <td class="text-black border border-slate-300 p-5 h-auto " >{img}</td>
        <td class="text-black border border-slate-300 p-5 h-auto" >{description}</td>
        <td class="border border-slate-300 lg:pl-24 pl-0"> <button class="btn btn-sm btn-warning" onClick={()=>galleryupdate(_id)}>Update</button></td>
        <td class="border border-slate-300 lg:pl-24 pl-0"> <button class="btn btn-sm btn-error" onClick={()=>gallerydelete(_id)}>Delete</button></td>
      </tr>
  )
}

export default SingleAdminGallery