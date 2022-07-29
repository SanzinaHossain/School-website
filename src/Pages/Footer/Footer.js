import React from 'react'
import { GrTwitter} from 'react-icons/gr';
import { SiFacebook } from 'react-icons/si';
import {CgMail} from 'react-icons/cg';
const Footer = () => {
  return (
    <div class="w-full h-auto bg-sky-900 pt-6 pb-6 bottom-0">
       <div class="mx-auto flex w-auto justify-center">
       <a class="text-white text-5xl px-3 hover:text-gray-400" target="_blank" href=""><SiFacebook></SiFacebook></a>
      <a class="text-white text-5xl px-3 hover:text-gray-400" target="_blank" href=""><GrTwitter></GrTwitter></a>
      <a class="text-white text-5xl px-3 hover:text-gray-400" target="_blank" href=""><CgMail></CgMail></a>
       </div>
       < h1 class="text-white text-center text-lg pt-3">© 2022 Developed By Sanzina Hossain</h1>
    </div>
  )
}

export default Footer