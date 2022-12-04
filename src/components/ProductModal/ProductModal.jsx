import React from 'react'

import capitalLetter from '../firstCapitalLetter/capitalLetter'
import priceAndCurrency from '../Price/priceAndCurrency'
import truncate from '../truncate/truncate'

import './productModal.css'

export default function ProductModal(props) {
    const { name, brand, imgUrl, price, category, type, currency, bigImgUrl, tagList, colors } = props.productInfo

    const avaibleColors = colors.map(function (item) { return item["hex_value"]; });

    const closeModal = () => {
        props.setOpen(false)
    }
    console.log(tagList)
    return (
        <>
            <div style={{ position: "fixed", top: "0", height: "100%", left: "0", right: "0", margin: "auto", backgroundColor: "grey", width: "100%", opacity: "0.1" }} onClick={closeModal} />
            <div style={{ position: "fixed", top: "0", bottom: "0", height: "550px", left: "0", right: "0", margin: "auto", backgroundColor: "white", width: "900px", borderRadius: '50px', boxShadow: "1px 2px 20px 1px " }}>
                <div className='productModalContainer'>
                    <div style={{ fontSize: "32px", fontWeight: "500", marginBottom: "15px" }}>
                        {name}
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                        <div style={{ width: "35%" }}>
                            <img src={bigImgUrl} alt={name}
                                style={{ borderRadius: "5px", maxHeight: '300px', maxWidth: "400px" }}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = imgUrl
                                }}
                            />
                        </div>
                        <div style={{ width: "65%", display: "flex", flexDirection: "column", }}>

                            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", fontSize: '20px' }}>
                                    <div>Brand:</div>
                                    <div>Category: &nbsp;</div>
                                    <div>Type:</div>
                                    <div>Price:</div>
                                    {/* <div>Colors:</div> */}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: '20px' }}>
                                    <div>{capitalLetter(brand)}</div>
                                    <div>{capitalLetter(category)}</div>
                                    <div>{capitalLetter(type)}</div>
                                    <div>{priceAndCurrency(price, currency)}</div>

                                </div>

                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                <div>Colors:</div>
                                <div style={{ display: "flex", gap: "2px",flexWrap:"wrap" }}>
                                    {avaibleColors.map((e) =>
                                        <div style={{ backgroundColor: `${e}`, height: "30px", width: "30px" }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
