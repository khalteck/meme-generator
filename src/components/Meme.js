import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "top text",
        bottomText: "bottom text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function getMeme() {
        const randomItem = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[randomItem].url;
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        });
    }
    return(
        <div className="w-full">
            <div className="w-full flex mb-5">
                <input
                    type="text" id="first" placeholder="Top text" 
                    className="w-[47.5%] md:w-[230px] h-[35px] text-[12px] px-3 mr-[auto] bg-white outline-none border border-slate-300 border-1 rounded-[5px]"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text" id="second" placeholder="Bottom text" 
                    className="w-[47.5%] md:w-[230px] h-[35px] px-3 text-[12px] bg-white outline-none border border-slate-300 border-1 rounded-[5px]"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button 
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 p-2 rounded-[5px] text-white mb-5"
            onClick={getMeme}

            >
                Get a new meme image
            </button>
            <div className="w-full h-[fit-content] relative">
                <h1 className="w-full absolute top-[5%] text-center font-bold text-[1.75rem] md:text-[2.75rem] text-white text-shad">{meme.topText}</h1>
                <h1 className="w-full absolute bottom-[5%] text-center font-bold text-[1.75rem] md:text-[2.75rem] text-white text-shad">{meme.bottomText}</h1>
                <img alt="meme" src={meme.randomImage} className="w-full h-[auto] rounded-[5px] border border-rose-500"/>
            </div>
        </div>
    )
}