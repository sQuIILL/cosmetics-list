import React from 'react'
import useGetRandomProducts from '../../middleware/useGetRandomProducts';
import ProductCell from '../ProductCell/ProductCell'

export default function ProductsListLayout() {
    const { products } = useGetRandomProducts();
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
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
                            type={product.product_type}
                            category={product.category}
                            currency={product.currency}
                            bigImgUrl={product.image_link}
                            tagList={product.tag_list}
                            colors={product.product_colors}
                            productLink={product.product_link}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
