import React from 'react'

import capitalLetter from '../../tools/firstCapitalLetter/capitalLetter'
import priceAndCurrency from '../../tools/price/priceAndCurrency'
import truncate from '../../tools/truncate/truncate'

import './productModal.css'

export default function ProductModal({ productInfo:
    { id, name, brand, api_featured_image, price, category, product_type,
        currency, image_link, tag_list, product_colors, product_link, description }
    , setOpen }) {

    const avaibleColors = product_colors.map(function (item) { return item["hex_value"]; });

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <>
            <div style={{ position: "fixed", top: "0", height: "100%", left: "0", right: "0", margin: "auto", backgroundColor: "grey", width: "100%", opacity: "0.6" }} onClick={closeModal} />
            <div key={id} style={{ position: "fixed", top: "0", bottom: "0", height: "550px", left: "0", right: "0", margin: "auto", backgroundColor: "white", width: "1050px", borderRadius: '50px', boxShadow: "1px 2px 20px 1px " }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5,1fr)",
                    height: "100%"
                }}>
                    <div style={{ gridColumn: "1/3", display: "flex", alignItems: "center", justifyContent: "center", }}>
                        <div >
                            <img src={image_link} alt={name} width={300}
                                style={{ maxWidth: "300px", borderRadius: "50px 0px 0px 50px", maxHeight: "450px" }}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = api_featured_image;
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ gridColumn: "3/6", display: "flex", justifyContent: "flex-start", width: "100%", flexDirection: "column", padding: "40px 0px 50px 0" }}>
                        <div style={{ fontSize: "32px", fontWeight: "500", textAlign: "left" }}>
                            {name}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", }}>
                            <div style={{ display: "flex", justifyContent: "flex-start", gap: "30px" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", fontSize: '20px' }}>
                                    <div>Brand:</div>
                                    <div>Category: &nbsp;</div>
                                    <div>Type:</div>
                                    <div>Price:</div>

                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: '20px', textAlign: "left" }}>
                                    <div>{capitalLetter(brand)}</div>
                                    <div>{capitalLetter(category)}</div>
                                    <div>{capitalLetter(product_type)}</div>
                                    <div>{priceAndCurrency(price, currency)}</div>
                                </div>
                            </div>
                        </div>
                        {avaibleColors.length === 0 ? <></> :
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                                <div style={{ fontSize: "18px" }}>Colors:</div>
                                <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
                                    {avaibleColors.map((e) =>
                                        <div key={e} style={{ backgroundColor: `${e}`, height: "20px", width: "20px" }} />
                                    )}
                                </div>
                            </div>
                        }
                        {tag_list.length === 0 ? <></> :
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                                <div>Tags:</div>
                                <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
                                    {tag_list.map((e) =>
                                        <div key={e} style={{ padding: "10px 15px", borderRadius: "10px", border: "1px solid grey" }}>{capitalLetter(e)}</div>
                                    )}
                                </div>
                            </div>
                        }
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <div style={{ fontSize: "22px", margin: "10px 0 5px", }}>
                                Description:
                            </div>
                            <div style={{ textAlign: "justify", paddingRight: "30px" }}>
                                {truncate(description, 312)}
                            </div>
                        </div>
                        <div style={{ margin: "20px 0 0" }}>
                            <a href={product_link} style={{ borderRadius: "10px", textDecoration: "none", padding: "10px 30px", backgroundColor: "black", color: "white" }}>CHECK THIS PRODUCT HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}