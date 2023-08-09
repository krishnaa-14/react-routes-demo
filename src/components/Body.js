import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";


const Body = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </React.Fragment>
    );
}

export default Body;