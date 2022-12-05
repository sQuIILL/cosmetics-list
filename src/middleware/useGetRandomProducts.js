import { useEffect, useState } from 'react';
import axios from 'axios';

import { PRODUCT_TAGS } from '../constant/tags';

const PRODUCTS_COUNT = 20;
const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

const getRandomProductTag = () => {
    const randomNumber = Math.floor(Math.random() * PRODUCT_TAGS.length);

    return PRODUCT_TAGS[randomNumber];
};

const useGetRandomProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getTopProducts = () => {
        setIsLoading(true);
        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    product_tags: getRandomProductTag(),
                },
            })
            .then(response => {
                const { data } = response;
                data.length = data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : data.length;
                setProducts(data);
            });

    };
    // console.log(getTopProducts)
    useEffect(() => {
        setIsLoading(false);
        getTopProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setIsLoading(false);
    }, [products]);

    return { isLoading, products };
};

export default useGetRandomProducts;
