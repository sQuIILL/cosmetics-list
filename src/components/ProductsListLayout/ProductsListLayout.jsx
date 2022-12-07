import React from 'react'
import { useSearchState } from '../../state/search-context';
import ProductCell from '../ProductCell/ProductCell'

export default function ProductsListLayout({ pagination }) {
    const [{ products }] = useSearchState();

    if (pagination === 0) {
        var displayedProducts = products.splice(0, 29)
    } else {
        displayedProducts = products.splice((29 * pagination), ((pagination * 29) + 29))
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {displayedProducts.length === 0 ? (
                <>
                    noProducts
                </>
            ) : (
                <>
                    {displayedProducts.map(product => (
                        <ProductCell productInfo={product} key={product.id} />
                    ))}
                </>
            )}
        </div>
    )
}
