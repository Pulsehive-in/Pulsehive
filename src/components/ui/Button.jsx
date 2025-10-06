import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

function button({title = "Get Started"}) {
  return (
    <div className='min-w-32 px-3 py-2 bg-zinc-200 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoMdReturnRight />
    </div>
  )
}

export default button