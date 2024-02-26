import { useState } from "react";
import "../../src/App.css"
import { getImages } from "../helpers/getImages";

let size = 3;

const Cards = () => {

    const [images, setImages] = useState(getImages());
    const [selected, setSelected] = useState([]);
    const [opened, setOpened] = useState([]);

    const handleClick = (item) => {
        setSelected(selected => selected.concat(item))

    }

    let include = false;


    return (
        <div className="cards">
            <h2>Score: 100</h2>
            <ul>
                {
                    images.map((item, index) => (
                        <li key={index} onClick={() => handleClick(item)}>
                            <div className="content">
                                {include = selected.includes(item)}
                                <div className="front">
                                    <img src="/question.png" alt="" />
                                </div>
                                <div className="back">
                                    <img src={item} alt="" />
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Cards;