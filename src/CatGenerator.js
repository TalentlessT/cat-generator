import { useState } from 'react';

const CatGenerator = () => {

    const [img, setImg] = useState("https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png");

    function fetch_data() {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => {
                return res.json();
            }).then(result => {
                setImg(result[0].url);
            })
    }

    return (
        <div>
            <h1>cat image generator</h1>
                <div className="cat-image">
                    <img src={img} alt="random-cat" />
                </div>
                <div className="new-button">
                    <button onClick={fetch_data}>new cat</button>
                </div>
        </div>
    );
}

export default CatGenerator;