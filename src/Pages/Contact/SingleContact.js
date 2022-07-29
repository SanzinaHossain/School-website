import React from 'react'

const SingleContact = ({c}) => {
    const{name,mobile,message}=c;
  return (
    <tr class="w-full border border-slate-300 ">
    <td class="text-black border border-slate-300 h-auto p-5" >{name}</td>
    <td class="text-black border border-slate-300 p-5 h-auto " >{mobile}</td>
    <td class="text-black border border-slate-300 p-5 h-auto" >{message}</td>
    
  </tr>
  )
}

export default SingleContact