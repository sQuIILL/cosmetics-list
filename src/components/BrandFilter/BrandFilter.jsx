import React from 'react'

import { BRANDS } from '../../constant/brands';

export default function BrandFilter({ onChange }) {

    function serveTypesAndCategory(element) {
        if (element === 'all') {
            onChange(null)
        } else onChange(element);
    }

    return (
        <ul style={{ listStyle: "none" }}>
            {BRANDS.map(element => (
                <li key={element} style={{display:"flex"}}>
                    <input key={element} type="radio" name="brands"
                        onClick={() => serveTypesAndCategory(element)} />
                    {element}
                </li>
            ))}
        </ul>
    )
}
