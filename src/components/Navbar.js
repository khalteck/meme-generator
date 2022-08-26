import React from "react"
import troll from "../images/icons8-trollface-48.png";

export default function Navbar() {
    return(
        <nav className="w-full h-[60px] bg-gradient-to-r from-rose-500 to-pink-500 flex items-center text-white px-[15px] md:px-[30px] rounded-t-md">
            <img alt="" src={troll} className="w-[35px] h-[35px]" />
            <h2 className="mr-[auto] ml-2 font-[600] text-[1rem] md:text-[1.25rem]">Meme Generator</h2>
            <p className="md:text-[0.75rem] text-[0.7rem]">React Course - Project 3</p>
        </nav>
    )
}