import React from 'react'

const Bar = ({images, activeIndex}) => {
  return (
    <div className='fixed bottom-12 w-[100vw] flex justify-center'>
      {
        images.map((img, index) => <div className={`h-3 w-3 rounded-[50%] bg-slate-100 mx-2 ${activeIndex  === index && 'opacity-70 bg-gray-600' }`}> </div>)
      }
    </div>
  )
}

export default Bar
