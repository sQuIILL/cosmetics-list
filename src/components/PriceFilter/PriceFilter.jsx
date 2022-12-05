import React from 'react'

export default function PriceFilter({ onChange }) {
    let currentTimeout;

    const onChangeHandler = e => {
        clearTimeout(currentTimeout);

        currentTimeout = setTimeout(() => {
            onChange(e);
        }, 1500);
    };
    return (
        <div>
            <div style={{ fontSize: '20px', fontWeight: "bold", margin: "20px 0 10px", }}>
                PRICE FILTER
            </div>
            <div style={{ display: "flex", flexDirection: "column", paddingLeft: "40px", marginRight: "20px" }}>
                <input
                    name="minPrice"
                    id="min"
                    type="text"
                    style={{ height: "50px", fontSize: "14px", marginBottom: "10px" }}
                    placeholder="MINIMUM PRICE"
                    onChange={onChangeHandler}
                />
                <input
                    name="maxPrice"
                    id="max"
                    type="text"
                    style={{ height: "50px", fontSize: "14px" }}
                    placeholder="MAXIMUM PRICE"
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    )
}
