import "../../src/App.css"
const Cards = () => {

    const images = [
        "/docker.svg",
        "/bun.svg",
        "/deno.svg"
    ]

    const newImages = images.flatMap(item => [item, item]).
        sort(() => Math.random())

    return (
        <div className="cards">
            <h2>Score: 100</h2>
            <ul>
                {
                    newImages.map((item, index) => (
                        <li key={index}>
                            <div className="content">
                                <div className="front">
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