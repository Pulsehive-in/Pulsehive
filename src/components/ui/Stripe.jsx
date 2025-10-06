import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[25%] px-4 py-6 flex justify-between items-center border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700'>
        <img src={val.url} alt="" />
        <span>{val.number}</span>
    </div>
  )
}

export default Stripe