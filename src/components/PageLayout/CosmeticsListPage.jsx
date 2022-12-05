import React from 'react'
import useGetFilteredProducts from '../../middleware/useGetFilteredProducts';
import ProductsListLayout from '../ProductsListLayout/ProductsListLayout'
import Sidebar from '../Sidebar/Sidebar';

export default function CosmeticsListPage() {
    const { isLoading } = useGetFilteredProducts();
    
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(9,1fr)",
            }}>
            <div style={{ gridColumn: "1/3" }}>
                <Sidebar />
            </div>
            <div style={{ gridColumn: "3/10" }}>
                {isLoading ?
                    <>ładuje się</>
                    :
                    <ProductsListLayout />
                }
            </div>
        </div>
    )
}
