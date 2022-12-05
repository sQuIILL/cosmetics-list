import React from 'react'

import capitalLetter from '../firstCapitalLetter/capitalLetter'
import priceAndCurrency from '../price/priceAndCurrency'

import './productModal.css'

export default function ProductModal({ productInfo:
    { id, name, brand, api_featured_image, price, category, product_type,
        currency, image_link, tag_list, product_colors, product_link, description }
    , setOpen }) {

    const avaibleColors = product_colors.map(function (item) { return item["hex_value"]; });
    const closeModal = () => {
        setOpen(false);
    }

    const setImageHeight = () => {
        const productsWithBadImgRes = ["Coverage Foundation", "Serum Foundation", "Moov Cosmetics Home Grown Canuck Collection"];
        if (productsWithBadImgRes.includes(name)) {
            return 300;
        } else return 350;
    }


    return (
        <>
            <div key={id} style={{ position: "fixed", top: "0", height: "100%", left: "0", right: "0", margin: "auto", backgroundColor: "grey", width: "100%", opacity: "0.7" }} onClick={closeModal} />
            <div key={id} style={{ position: "fixed", top: "0", bottom: "0", height: "550px", left: "0", right: "0", margin: "auto", backgroundColor: "white", width: "750px", borderRadius: '50px', boxShadow: "1px 2px 20px 1px " }}>
                <div className='productModalContainer'>
                    <div style={{ fontSize: "32px", fontWeight: "500", marginBottom: "15px" }}>
                        {name}
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                        <div >
                            <img src={image_link} alt={name} height={setImageHeight(name)}
                                style={{ maxWidth: "400px" }}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = api_featured_image;
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", }}>
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", fontSize: '20px' }}>
                                    <div>Brand:</div>
                                    <div>Category: &nbsp;</div>
                                    <div>Type:</div>
                                    <div>Price:</div>
                                    <div>
                                        <a href={product_link} style={{ color: "black" }}>Link to product</a>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: '20px' }}>
                                    <div>{capitalLetter(brand)}</div>
                                    <div>{capitalLetter(category)}</div>
                                    <div>{capitalLetter(product_type)}</div>
                                    <div>{priceAndCurrency(price, currency)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {avaibleColors.length === 0 ? <></> :
                        < div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 50px", marginTop: "10px" }}>
                            <div>Colors:</div>
                            <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
                                {avaibleColors.map((e) =>
                                    <div style={{ backgroundColor: `${e}`, height: "30px", width: "30px" }} />
                                )}
                            </div>
                        </div>
                    }
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 50px", marginTop: "10px" }}>
                        <div>Tags:</div>
                        <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
                            {tag_list.map((e) =>
                                <div style={{ padding: "10px 15px", borderRadius: "10px", border: "1px solid grey" }}>{capitalLetter(e)}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
