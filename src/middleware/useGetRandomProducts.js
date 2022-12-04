import { useEffect, useState } from 'react';
import axios from 'axios';

// import { PRODUCT_TAGS } from '../constants/tags';

const PRODUCTS_COUNT = 20;
const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

export const PRODUCT_TAGS = [
    'canadian',
    'certclean',
    'chemical free',
    'dairy free',
    'ewg verified',
    'ecocert',
    'fair trade',
    'gluten free',
    'hypoallergenic',
    'natural',
    'no talc',
    'non-gmo',
    'organic',
    'peanut free product',
    'sugar free',
    'usda organic',
    'vegan',
    'alcohol free',
    'cruelty free',
    'oil free',
    'purpicks',
    'silicone free',
    'water free',
];

const getRandomProductTag = () => {
    const randomNumber = Math.floor(Math.random() * PRODUCT_TAGS.length);

    return PRODUCT_TAGS[randomNumber];
};

const useGetRandomProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getTopProducts = () => {
        setIsLoading(true);
        console.log("productky ",products)
        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    product_tags: getRandomProductTag(),
                },
            })
            .then(response => {
                const { data } = response;
                data.length = data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : data.length;
                console.log("data w then", data)
                setProducts(data);
            });
            console.log("productky2 ",products)

    };
    console.log("productky3 ",products)

    useEffect(() => {
        setIsLoading(false);
        getTopProducts();
    }, []);

    useEffect(() => {
        setIsLoading(false);
    }, [products]);

    return { isLoading, products };
};

export default useGetRandomProducts;
