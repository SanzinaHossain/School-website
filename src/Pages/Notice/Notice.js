import React, { useEffect, useState } from 'react'
import SingleNotice from './SingleNotice';

const Notice = () => {
  let value=parseInt(0);
  const [notice,setNotice]=useState([])
    useEffect(()=>{
          fetch("notice.json")
          .then(res=>res.json())
          .then(data=>{
              setNotice(data);
          })
    },[])
  return (
    <div className='bg-base-300'>
    <h1 className='text-center text-3xl text-green-700 font-bold pt-7'>Notice Board</h1>
    <div class="overflow-x-auto mt-8">
<table class="lg:table-fixed w-full border-collapse border border-slate-400">
<thead>
  <tr>
    <th>No</th>
    <th>Date</th>
    <th>Tittle</th>
    <th>View</th>
  </tr>
</thead>
<tbody>
  {
      notice.map((n,index)=>
      <SingleNotice
          value={index+1}
          n={n}
      ></SingleNotice>
        )
  }
</tbody>
</table>
</div>
    </div>
  )
}

export default Notice