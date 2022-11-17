import React from 'react'
import picture from  "../assets/dp.jpg"

const Picture = () => {
  return (
    <>
    <div className="picMainDiv">
    <div>
        <img src={picture} className='picture ' alt=''/>
    </div>
    <div className='mx-2'>
        <h5>Muhammad Shoaib</h5>
        <p>joined 20 aug 2022 </p>
    </div>
    </div>
    </>
  )
}

export default Picture;