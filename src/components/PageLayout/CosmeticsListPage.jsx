import React from 'react'
import ProductCell from '../ProductCell/ProductCell'
import ProductsListLayout from '../ProductsListLayout/ProductsListLayout'

export default function CosmeticsListPage() {
    return (
        // <div>CosmeticsListPage</div>
        <div 
        style={{ display: "flex", flex: "row",flexGrow:"1" }}
        >
            <div
            style={{width:"30%",}}
            >cos tma</div>
            <div 
            style={{width:"70%"}}
            >
                <ProductsListLayout/>
            </div>
        </div>
    )
}
