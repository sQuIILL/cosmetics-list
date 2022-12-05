import { useEffect, useState } from 'react';
import axios from 'axios';

import { useSearchState } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products';
const PRODUCTS_COUNT = 20;

const useGetFilteredProducts = () => {
    const [state, dispatch] = useSearchState();
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = () => {
        setIsLoading(true);
        dispatch(setProducts([]));

        const params = {
            product_type: state.filters.productType,
            brand: state.filters.brand,
            price_greater_than: state.filters.minPrice,
            price_less_than: state.filters.maxPrice,
            product_category: state.filters.productCategory,
        };
        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then(({ data }) => {
                data.length = data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : data.length;
                dispatch(setProducts(data));
                setIsLoading(false);
            });
            console.log(params)
    };

    useEffect(() => {
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.filters,state.filters.productCategory]);

    return {
        isLoading,
    };
};

export default useGetFilteredProducts;
