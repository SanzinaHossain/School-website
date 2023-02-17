import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
const Event = () => {
  return (
    <div class="pt-12 pb-10 bg-white">
      <h1 class="text-orange-800 text-3xl text-center font-bold">OUR EVENTS</h1>
      <h1 class="text-black text-lg text-center">
        We do all the work, you get all the credit
      </h1>
      <div class="grid lg:grid-cols-6 grid-cols-1 justify-evenly gap-9 mt-16 lg:mx-24 mx-16">
        <div class="col-span-2">
          <img
            class="w-full h-44"
            src="https://assets-global.website-files.com/56b2d0222988c4230fc7de41/622be8b56e8d793e980a5dcd_conner-baker-7FC-84Ap_IU-unsplash.jpg"
          ></img>
        </div>
        <div class="col-span-3">
          <h1 class="text-lg mt-2">
            <span class="text-5xl text-orange-700 font-bold">27/</span>
            <span>December, 4 hours, Kings Livepool UK</span>{" "}
          </h1>
          <h1 class="text-2xl text-sky-900 mt-2">
            Grand Opening of the Summers Walk
          </h1>
          <p class="text-black text-lg mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae voluptatum praesentium explicabo....
          </p>
        </div>
        <div class="flex items-center lg:justify-start justify-center">
          <button class="btn btn-outline border-orange-700 text-black rounded-full border-2 hover:bg-orange-700 hover:border-white hover:text-white">
            Register
          </button>
        </div>
      </div>
      <div class="grid lg:grid-cols-6 grid-cols-1 justify-evenly gap-9 mt-7 lg:mx-24 mx-16">
        <div class="col-span-2">
          <img
            class="w-full h-44"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKmroAB9OeZCJRLYTWjAwTJyCrzHi56udIdR4jl4oalGdiX1-6mqs5bqyK2B--bCDntc&usqp=CAU"
          ></img>
        </div>
        <div class="col-span-3">
          <h1 class="text-lg mt-2">
            <span class="text-5xl text-orange-700 font-bold">13/</span>
            <span>January, 6 hours, Kings Livepool UK</span>{" "}
          </h1>
          <h1 class="text-2xl text-sky-900 mt-2">
            Grand Opening of the Summers Walk
          </h1>
          <p class="text-black text-lg mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae voluptatum praesentium explicabo....
          </p>
        </div>
        <div class="flex items-center lg:justify-start justify-center">
          <button class="btn btn-outline border-orange-700 text-black rounded-full border-2 hover:bg-orange-700 hover:border-white hover:text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
