import React from 'react'

const SingleAdminGallery = ({g}) => {
    const {_id,img,description}=g;
  return (
    <tr class="w-full border border-slate-300 ">
        <td class="text-black border border-slate-300 h-auto p-5" >{_id}</td>
        <td class="text-black border border-slate-300 p-5 h-auto " >{img}</td>
        <td class="text-black border border-slate-300 p-5 h-auto" >{description}</td>
        <td class="border border-slate-300 lg:pl-24 pl-0"> <button class="btn btn-sm btn-warning">Update</button></td>
        <td class="border border-slate-300 lg:pl-24 pl-0"> <button class="btn btn-sm btn-error">Delete</button></td>
      </tr>
  )
}

export default SingleAdminGallery