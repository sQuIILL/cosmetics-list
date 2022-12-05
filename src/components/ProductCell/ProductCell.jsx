import React from 'react'

import capitalLetter from '../firstCapitalLetter/capitalLetter'
import priceAndCurrency from '../price/priceAndCurrency'
import ProductModal from '../ProductModal/ProductModal'
import truncate from '../truncate/truncate'

import './productCell.css'

export default function ProductCell({ productInfo }) {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true)
  };

  return (
    <>
      <div className='productCellContainer' onClick={openModal}>
        <div style={{ float: 'left', fontSize: "24px", fontWeight: "500", marginBottom: "5px" }}>
          {truncate(productInfo.name, 38)}
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
          <div style={{ width: "35%", }}>
            <img src={productInfo.api_featured_image}
              alt={productInfo.name}
              style={{ borderRadius: "50%", maxHeight: '190px', maxWidth: "170px" }}
            />
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
                <div>{capitalLetter(productInfo.brand)}</div>
                <div>{capitalLetter(productInfo.category)}</div>
                <div>{capitalLetter(productInfo.product_type)}</div>
                <div>{priceAndCurrency(productInfo.price, productInfo.currency)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open ? <ProductModal productInfo={productInfo} setOpen={setOpen} /> : null}
    </>
  )
}