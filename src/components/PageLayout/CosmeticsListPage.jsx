import React from 'react'
import useGetFilteredProducts from '../../middleware/useGetFilteredProducts';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import ProductsListLayout from '../ProductsListLayout/ProductsListLayout'
import Sidebar from '../Sidebar/Sidebar';


export default function CosmeticsListPage() {
    const { isLoading } = useGetFilteredProducts();

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(9,1fr)",
        }}>
            <div style={{ gridColumn: "1/3" }}>
                <Sidebar />
            </div>
            <div style={{ gridColumn: "3/10" }}>
                {isLoading ?
                    <div style={{position:"absolute", top:"45%",left:"60%"}}>
                        <LoadingIcon/>
                    </div>
                    :
                    <ProductsListLayout />
                }
            </div>
        </div>
    )
}
