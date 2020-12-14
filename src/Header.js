import React from "react";

function Header(){
    const headerStyle ={
    backgroundColor: "#678c89",
    color: "#fff",
    padding: "10px 15px",
    };

    return (
        <header style={headerStyle}>
            {/* twee accolades is voor de inline style van JSX, cammelcase! */}
            <h1 style={{ fontSize: "25px", lineHeight: "1.4", margin: "0"}}>To do App</h1>
        </header>
    )
}

export default Header;