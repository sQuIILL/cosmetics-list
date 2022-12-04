import React from 'react'
import useGetRandomProducts from '../../middleware/useGetRandomProducts';
import ProductCell from '../ProductCell/ProductCell'

export default function ProductsListLayout() {
    const { products, isLoading } = useGetRandomProducts();
    console.log(isLoading)
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.length === 0 ? (
                <>
                    noProducts
                </>
            ) : (
                <>
                    {products.map(product => (
                        <ProductCell
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            imgUrl={product.api_featured_image}
                            price={product.price}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
