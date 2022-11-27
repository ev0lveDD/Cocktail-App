import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

function Drink(){
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch(url+id)).json();

        // set state when the data received
        const [item] = data.drinks;
        setData(item);
        console.log(item);
        setLoading(false);
        };

        dataFetch();
    }, []);

    return(
        <div>
        {loading ? <div>...loading</div> : <div className="Drink-Card">
        <nav>
        <Link to={`/Category/${data.strCategory}`}><i className='fas fa-angle-left'></i></Link>
        </nav>
        <img src={require('./4.png')}></img>
        <p className="Drink-Category">{data.strCategory}</p>
        <h1 className="Drink-Name">{data.strDrink}</h1>
        <h5 className="Drink-Label">Ingredients</h5>
        <div className="Drink-Ingredients-Text">
            <p>{data.strMeasure1} {data.strIngredient1}</p>
            <p>{data.strMeasure2} {data.strIngredient2}</p>
            <p>{data.strMeasure3} {data.strIngredient3}</p>
            <p>{data.strMeasure4} {data.strIngredient4}</p>
            <p>{data.strMeasure5} {data.strIngredient5}</p>
            <p>{data.strMeasure6} {data.strIngredient6}</p>
            <p>{data.strMeasure7} {data.strIngredient7}</p>
            <p>{data.strMeasure8} {data.strIngredient8}</p>
            <p>{data.strMeasure9} {data.strIngredient9}</p>
            <p>{data.strMeasure10} {data.strIngredient10}</p>
            <p>{data.strMeasure11} {data.strIngredient11}</p>
            <p>{data.strMeasure12} {data.strIngredient12}</p>
            <p>{data.strMeasure13} {data.strIngredient13}</p>
            <p>{data.strMeasure14} {data.strIngredient14}</p>
            <p>{data.strMeasure15} {data.strIngredient15}</p>
        </div>
        <h5 className="Drink-Label">Description</h5>
        <p className="Drink-Instructions-Text">{data.strInstructions}</p>
        </div>}
        </div>
    );
}

export default Drink;


