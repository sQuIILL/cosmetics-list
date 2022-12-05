import React from 'react'

import capitalLetter from '../../tools/firstCapitalLetter/capitalLetter';

import { BRANDS } from '../../constant/brands';

export default function BrandFilter({ onChange }) {

    function serveTypesAndCategory(element) {
        if (element === 'all') {
            onChange(null)
        } else onChange(element);
    }

    return (
        <>
            <div style={{ fontSize: '20px', fontWeight: "bold", margin: "20px 0 0", }}>
                BRAND FILTER
            </div>
            <ul style={{ listStyle: "none" }}>
                {BRANDS.map(element => (
                    <li key={element} style={{ display: "flex", margin: "5px 0" }}>
                        <input key={element} type="radio" name="brands"
                            onClick={() => serveTypesAndCategory(element)} />
                        {capitalLetter(element)}
                    </li>
                ))}
            </ul>
        </>
    )
}
