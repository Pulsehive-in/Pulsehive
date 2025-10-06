import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {

    var products = [
        { title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case:false},
        { title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design..", live: true, case:false},
        { title: "YIR 2022", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case:true},
        { title: "Yahoo!", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case:false},
        { title: "Rainfall", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case:true}
    ];
    
    const [pos , setPos] = useState()
    const mover = (val)=>{
      setPos(val*23)
    }

  return (

    <div className='mt-20 relative'>
        {products.map((val, index)=> <Product key={index} val={val} mover={mover} count={index} /> )}
        <div className='absolute top-0  w-full h-full  pointer-events-none'>
            <motion.div 
            initial={{y: pos, x:"-50%"}} 
            animate={{y: pos+`rem`}}
            transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: 0.6  }}
            className='absolute w-[32rem] h-[23rem] left-[43%] overflow-hidden'>
              <motion.div transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: 0.6  }} animate={{y: -pos+`rem`}} className='w-full h-full'>
                <video className='h-full w-fit' muted autoPlay loop src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm"></video>
              </motion.div>
              <motion.div transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: 0.6  }} animate={{y: -pos+`rem`}} className='w-full h-full'>
                 <video className='h-full w-fit' muted autoPlay loop src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"></video>
              </motion.div>
              <motion.div transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: 0.6  }} animate={{y: -pos+`rem`}} className='w-full h-full'>
                 <video className='h-full w-fit' muted autoPlay loop src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/weglotlikemagic-43.webm"></video>
              </motion.div>
              <motion.div transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: 0.6  }} animate={{y: -pos+`rem`}} className='w-full h-full '>
                 <video className='h-full w-fit' muted autoPlay loop src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"></video>
              </motion.div>
              <motion.div transition={{ease:[0.68, -0.6, 0.32, 1.6], duration: 0.6  }} animate={{y: -pos+`rem`}} className='w-full h-full '>
                 <video className='h-full w-fit' muted autoPlay loop src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-43.webm"></video>
              </motion.div>
    
            </motion.div>
        </div>
    </div>
  )
}

export default Products