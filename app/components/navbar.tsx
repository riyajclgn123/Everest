import React from 'react';
import Image from 'next/image';
export default function Navbar() {
  return (
    <>
      <div className=" bg-slate-300 w-auto h-20 m-2" >
        <div className="flex flex-row">
          <Image width={80} height={10} src="/download.jpeg" alt ="logo" className="pl-4 h-24 pr-5 py-5"/>
          <div className="basis-1/7 text-black font-bold text-2xl py-10 pr-10">Home</div>
          <div className="basis-1/7 text-black font-bold text-2xl py-10 pr-10">About</div>
          <div className="basis-1/7 text-black font-bold text-2xl py-10 pr-40">Help</div>
          <div className="basis-2/5 text-black text-xl py-10 pr-10">
               <div className="bg-white text-center">Search the data</div>
          </div>
          <div className=" py-10">
            <button className="border border-black rounded-2xl font-bold pr-4 pl-4 flex flex-row-reverse">Profile</button>
          </div>
        </div>
      </div>
    </>
  );
}
