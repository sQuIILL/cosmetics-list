import React from 'react'

import { BRANDS } from '../../constant/brands';

export default function BrandFilter({ onChange }) {

    function serveTypesAndCategory(element) {
        if (element === 'all') {
            onChange(null)
        } else onChange(element);
    }

    return (
        <ul>
            {BRANDS.map(element => (
                <li
                    key={element}
                    onClick={() => serveTypesAndCategory(element)}
                >
                    {element}
                </li>
            ))}
        </ul>
    )
}
