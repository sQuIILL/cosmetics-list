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
        <>
            <input
                name="minPrice"
                id="min"
                type="text"
                className="w-20 p-2 text-center  text-sm focus:ring-2 focus:ring-yellow focus:ring-inset caret-yellow outline-none"
                placeholder="min"
                onChange={onChangeHandler}
            />
            <input
                name="maxPrice"
                id="max"
                type="text"
                className="w-20 p-2 text-center  text-sm focus:ring-2 focus:ring-yellow focus:ring-inset caret-yellow outline-none"
                placeholder="max"
                onChange={onChangeHandler}
            />
        </>
    )
}
