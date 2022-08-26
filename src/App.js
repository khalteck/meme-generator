import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
    return (
        <div className="w-[100vw] md:w-[550px] px-[7px] md:px-0">
            <Navbar/>
            <Main/>
        </div>
    )
}