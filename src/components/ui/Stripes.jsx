import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data = [
        {url: "./public/images/st1.svg", number:48},
        {url: "./public/images/st2.svg", number:2},
        {url: "./public/images/st3.svg", number:11},
        {url: "./public/images/st4.svg", number:52},
        {url: "./public/images/st5.svg", number:12},
    ]
  return (
    <div className='flex items-center justify-between mt-28'>
        {data.map((elem, index)=> (
            <Stripe key={index} val={elem} />
        ))}
    </div>
  )
}

export default Stripes