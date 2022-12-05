import React from 'react'
import { setFilter } from '../../state/actionCreators';
import { useSearchState } from '../../state/search-context';

import BrandFilter from '../BrandFilter/BrandFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import TypeFilter from '../TypeFilter/TypeFilter';

export default function Sidebar() {
    const [, dispatch] = useSearchState();

    const handleOnSelect = (type, cat) => {
        dispatch(setFilter('productType', type));
        if (cat !== null) {
            dispatch(setFilter('productCategory', cat));
        }
    };

    const handleChange = (brand) => {
        dispatch(setFilter('brand', brand));
    }

    const handleOnChange = e => {
        const { name, value } = e.target;
        dispatch(setFilter(name, value));
    };

    return (
        <>
            <PriceFilter onChange={handleOnChange} />
            <TypeFilter onSelect={handleOnSelect} />
            <BrandFilter onChange={handleChange} />
        </>
    )
}
