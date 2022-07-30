import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const SingleNotice = ({n,value}) => {
    const navigate=useNavigate()
    const{tittle,date,des,noticelink}=n;
    const c=()=>{
        navigate("/modal");
    }
  return (
    <tr class="w-full border border-slate-300 ">
        <td class="text-black border border-slate-300 h-auto p-5" >{value}</td>
        <td class="text-black border border-slate-300 p-5 h-auto " >{date}</td>
        <td class="text-black border border-slate-300 p-5 h-auto" >{tittle}</td>
        <td class="border border-slate-300 lg:pl-24 pl-0"> <a target="_blank" href ={noticelink}class="btn btn-sm btn-warning">Click Here</a></td>
      </tr>
      
      
  )
}

export default SingleNotice