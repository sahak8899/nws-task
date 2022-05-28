import React from 'react'

export default function Cat({width, height, image}) {
  return (
    <div style={{width: width, height: height}} className="cat">
        <img src={image}/>
    </div>
  )
}
