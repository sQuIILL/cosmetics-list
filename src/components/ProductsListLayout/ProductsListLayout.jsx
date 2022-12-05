import React from 'react'
import { useSearchState } from '../../state/search-context';
import ProductCell from '../ProductCell/ProductCell'

export default function ProductsListLayout() {
    const [{ products }] = useSearchState();
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {products.length === 0 ? (
                <>
                    noProducts
                </>
            ) : (
                <>
                    {products.map(product => (
                        <ProductCell productInfo={product} key={product.id} />
                    ))}
                </>
            )}
        </div>
    )
}
