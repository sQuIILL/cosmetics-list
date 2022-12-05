import React from 'react'
import { setFilter } from '../../state/actionCreators';
import { useSearchState } from '../../state/search-context';
import TagFilter from '../TypesFilter/TypesFilter';

export default function Sidebar() {
    const [, dispatch] = useSearchState();

    // const handleOnChange = e => {
    //     const { name, value } = e.target;
    //     dispatch(setFilter(name, value));
    // };

    // const handleType = value => {
    //     console.log(value,)

    //     dispatch(setFilter('product_type', value));
    // };

    // const handleTypeAndCategory = (type, cat) => {
    //     console.log(type, cat, " ass")
    //     dispatch(setFilter('product_type', type));
    //     dispatch(setFilter('product_category', cat));
    // };
    
    const handleOnSelect = (type,cat) => {
        dispatch(setFilter('productType', type,));
        console.log(type,cat)
        if(cat!==null){
            dispatch(setFilter('product_category', cat));
        }
    };
    return (
        <>
            <TagFilter onSelect={handleOnSelect}/>
        </>
    )
}
