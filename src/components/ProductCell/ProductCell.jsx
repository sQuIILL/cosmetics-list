import React from 'react'

import capitalLetter from '../firstCapitalLetter/capitalLetter'
import priceAndCurrency from '../Price/priceAndCurrency'
import truncate from '../truncate/truncate'

import './productCell.css'
export default function ProductCell({ id, name, brand, imgUrl, price, category, type, currency }) {
  return (
    <div className='productCellContainer'>
      <div style={{ float: 'left', fontSize: "24px", fontWeight: "500",marginBottom:"5px" }}>
        {truncate(name, 38)}
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
        <div style={{ width: "35%", }}>
          <img src={imgUrl} alt={name} style={{ borderRadius: "50%", maxHeight: '190px', maxWidth: "170px" }} />
        </div>
        <div style={{ width: "65%", display: "flex", flexDirection: "column", alignItems: 'flex-start' }}>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", fontSize: '20px' }}>
              <div>Brand:</div>
              <div>Category: &nbsp;</div>
              <div>Type:</div>
              <div>Price:</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: '20px' }}>
              <div>{capitalLetter(brand)}</div>
              <div>{capitalLetter(category)}</div>
              <div>{capitalLetter(type)}</div>
              <div>{priceAndCurrency(price, currency)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// key = { product.id }
// id = { product.id }
// name = { product.name }
// brand = { product.brand }
// imgUrl = { product.api_featured_image }
// price = { product.price }
// type = { product.product_type }
// category = { product.category }
// currency = { product.currency }
