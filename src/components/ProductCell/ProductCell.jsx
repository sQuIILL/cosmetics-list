import React from 'react'

export default function ProductCell({ id, name, brand, imgUrl, price }) {
  return (
    <div style={{ minHeight: "30px", minWidth: "30px", width: "300px", height: "300px", backgroundColor: "aquamarine", }}>
      <div>
        <img width="120" src={imgUrl} alt={name}/>
      </div>
      <div>
        <p>{name.replace(/^(.{12}[^\s]*).*/, '$1')}</p>
        <p>{brand}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
