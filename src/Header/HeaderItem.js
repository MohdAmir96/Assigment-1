import React from 'react'
import './HeaderItem.css'
function HeaderItem({
    title, img
}) {
  return (




    
    <div className='header-card'>
      <h5> {title} </h5>
      <img src={img}/>
      <p className='Header-card-offer'> <a> see all offers</a></p>
    </div>
  )
}

export default HeaderItem
