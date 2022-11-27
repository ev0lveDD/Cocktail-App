import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

function DrinkList(){
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const url= "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch(url+id)).json();

        // set state when the data received
        const item = data.drinks;
        setData(item);
        console.log(item);
        setLoading(false);
        };

        dataFetch();
    }, []);
    
    return(
    <div>
        <h1>Drink List {id}</h1>
        {loading ? <div>...loading</div> : <div className="first">{data.map((item) =>{
          return(
            <Link to={`/Drink/${item.strDrink}`}>
              <div className="Drink-List">
                <p>{item.strDrink}</p>
              </div></Link>);
        })}</div>}
    </div>
    );
}

export default DrinkList;