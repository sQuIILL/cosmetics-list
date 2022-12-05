import React from 'react'
import useGetRandomProducts from '../../middleware/useGetRandomProducts';
import useGetFilteredProducts from '../../middleware/useGetFilteredProducts';
import ProductsListLayout from '../ProductsListLayout/ProductsListLayout'
import Sidebar from '../Sidebar/Sidebar';

export default function CosmeticsListPage() {
    // const { isLoading } = useGetRandomProducts();
    const { isLoading } = useGetFilteredProducts();
    return (
        <div
            style={{ display: "flex", flex: "row", flexGrow: "1", }}
        >
            <div
                style={{ width: "30%", }}
            >
                <Sidebar/>
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
