import {useState} from 'react';

const CatGenerator = () => {

    const [img, setImg] = useState();

    function fetch_data(){
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => {
        return res.json();
    }).then(result => {
        setImg(result[0].url);
    })
    }

    return ( 
        <div>
            <h1>cat generator</h1>
            <img src={img}></img>
            <button onClick={fetch_data}>new one</button>
        </div>
     );
}
 
export default CatGenerator;