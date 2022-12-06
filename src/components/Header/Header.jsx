import React from 'react'

import './header.css'
export default function Header() {
    return (
        <div style={{ height: "150px", width: "100%", backgroundColor: "#97A2A8", marginBottom: "20px" }}>
            <div style={{ padding: "0 6rem", display: "flex" }}>
                <div className="bodyss" style={{ scale: "0.5", padding: "100px 100px 100px 100px", marginLeft: "87px" }}>
                    <div className="rectangle" ></div>
                    <div className="rectangle2" ></div>
                    <div className="square1"></div>
                    <div className="square2"></div>
                    <div className="circle"></div>
                </div>
                <div style={{ marginTop: "60px", zIndex: "10000000" }}>
                    <h1>COSMETIC LIST</h1>
                </div>
            </div>
        </div>
    )
}
