import React from 'react'
import { AiFillTwitterCircle} from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import {CgMail} from 'react-icons/cg';
import { Link } from 'react-router-dom'
import schoollogo from "../../image/schoollogo.webp"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
  const [user]=useAuthState(auth);
  const logout=()=>{
    signOut(auth);
  }
  const menuitems=<>
         <li class="hover:text-green-900 font-bold  active text-lg "><Link to ="/" >Home</Link></li>
        <li class="hover:text-green-900 font-bold mx-7" ><Link to ="/enrollment" >Admission</Link></li>
        <li class="hover:text-green-700 font-bold">{user? <Link to="/adminnotice">Notice</Link>:<Link to="/notice">Notice</Link>}</li>
        <li class="hover:text-green-700 font-bold mx-7">{user? <Link to="/admingallery">Gallery</Link>:<Link to="/gallery">Gallery</Link>}</li> 
        <li class="hover:text-green-700 font-bold">{user? <Link to="/admincontact">Contact</Link>:<Link to="/usercontact">Contact Us</Link>}</li>
        <li class="hover:text-green-700 font-bold mx-7">{user? <Link onClick={logout} to="/login">LogOut</Link>:<Link to="/login">Login</Link>}</li> 
  </>
  return (
    <div class="navbar bg-white sticky top-0">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/enrollement" >Admission</Link></li>
        <li class="hover:text-green-700">{user? <Link to="/adminnotice">Notice</Link>:<Link to="/notice">Notice</Link>}</li>
        <li class="hover:text-green-700">{user? <Link to="/admingallery">Gallery</Link>:<Link to="/gallery">Gallery</Link>}</li> 
        <li class="hover:text-green-700">{user? <Link to="/admincontact">Contact</Link>:<Link to="/usercontact">Contact Us</Link>}</li>
        <li class="hover:text-green-700">{user? <Link onClick={logout} to="/login">LogOut</Link>:<Link to="/login">Login</Link>}</li> 
        </ul>
      </div>
      <img class="normal-case text-xl text-green-700 w-24 h-16" src={schoollogo}></img>
    </div>
    <div class="navbar-center hidden lg:flex justify-evenly">
      <ul tabindex="0" class=" menu-horizontal p-0 text-lg ">
        {menuitems}
        </ul>
    </div>
    <div class="navbar-end lg-flex">
      <a class="hover:text-green-700 text-2xl px-3" target="_blank" href=""><SiFacebook></SiFacebook></a>
      <a class="hover:text-green-700 text-3xl px-3" target="_blank" href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
      <a class="hover:text-green-700 text-3xl px-3" target="_blank" href=""><CgMail></CgMail></a>
    </div>
  </div>
  )
}

export default Navbar