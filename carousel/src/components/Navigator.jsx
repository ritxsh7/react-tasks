import React from 'react'

const Navigator = ( {content, position, setNextIndex, setPrevIndex}) => {


    const handleClick = () => {
        position === "right" ? setNextIndex() : setPrevIndex();
    }

  return (
    <div className={`bg-white rounded-full text-gray-800 h-12 w-12 fixed transalte-y-[50%] top-[50%] hover:cursor-pointer ${position === "right" ? 'right-8' : 'left-8'}`} onClick={handleClick}>
        <p className='text-3xl text-center font-bold mt-[3px]'>{content}</p>
    </div>
  )
}

export default Navigator
