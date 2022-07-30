import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleAdminNotice = ({n,value}) => {
    const{tittle,date,_id}=n;
    const navigate=useNavigate();
    const noticedelete=(id)=>{
        console.log(id);
        const proceed=window.confirm('Are you sure?')
      if(proceed)
      {
          const url=`https://dry-temple-93431.herokuapp.com/allnotice/${id}`;
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
    const noticeupdate=(id)=>{
      navigate(`/updatenotice/${id}`)
   }
  return (
    <tr class="w-full border border-slate-300 ">
    <td class="text-black border border-slate-300 h-auto p-5" >{value}</td>
    <td class="text-black border border-slate-300 p-5 h-auto " >{date}</td>
    <td class="text-black border border-slate-300 p-5 h-auto" >{tittle}</td>
    <td class="border border-slate-300 lg:pl-24 pl-0"> <button  onClick={()=>noticeupdate(_id)}class="btn btn-sm btn-warning">Update</button></td>
    <td class="border border-slate-300 lg:pl-24 pl-0"> <button  onClick={()=>noticedelete(_id)}class="btn btn-sm btn-error">Delete</button></td>
  </tr>
  
  )
}

export default SingleAdminNotice