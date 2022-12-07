import React from 'react'

export default function Pagination({ paginationState: [numberPagination, setNumberPagination] }) {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "20px 0" }}>
            {numberPagination === 0 ? null :
                <div onClick={() => setNumberPagination(numberPagination - 1)}
                    style={{ border: "1px black solid", borderRadius: "50%", height: "40px", width: "40px", marginRight: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {numberPagination - 1}
                </div>
            }
            <div onClick={() => setNumberPagination(numberPagination)}
            style={{ border: "1px black solid", borderRadius: "50%", height: "40px", width: "40px", marginRight: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {numberPagination}
            </div>
            <div onClick={() => setNumberPagination(numberPagination + 1)}
            style={{ border: "1px black solid", borderRadius: "50%", height: "40px", width: "40px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                {numberPagination + 1}
            </div>
        </div>
    )
}
// numberPagination,setNumberPagination