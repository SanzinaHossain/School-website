import React, { useEffect, useState } from 'react'
import SingleContact from './SingleContact'

const AdminContact = () => {
    const [contact,setContact]=useState([])
    useEffect(()=>{
          fetch("https://dry-temple-93431.herokuapp.com/usercontact")
          .then(res=>res.json())
          .then(data=>{
              setContact(data);
          })
    },[])
  return (
    <div className='bg-base-300'>
        <h1 className='text-center text-3xl text-green-700 font-bold pt-7'>All Message List</h1>
        <div class="overflow-x-auto mt-8">
  <table class="lg:table-fixed w-full border-collapse border border-slate-400">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {
          contact.map(c=>
          <SingleContact
              c={c}
          ></SingleContact>
            )
      }
    </tbody>
  </table>
</div>
        </div>
  )
}

export default AdminContact