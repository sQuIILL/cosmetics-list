import React from 'react'
import useGetRandomProducts from '../../middleware/useGetRandomProducts';
import ProductsListLayout from '../ProductsListLayout/ProductsListLayout'

export default function CosmeticsListPage() {
    const { isLoading } = useGetRandomProducts();

    return (
        <div
            style={{ display: "flex", flex: "row", flexGrow: "1" }}
        >
            <div
                style={{ width: "30%", }}
            >
                cos tma
            </div>
            <div
                style={{ width: "70%" }}
            >
                {isLoading ?
                    <>ładuje się</>
                    :
                    <ProductsListLayout />
                }
            </div>
        </div>
    )
}
