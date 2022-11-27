import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function Category() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
        const data = await (
            await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")).json();

        // set state when the data received
        const item = data.drinks;
        setData(item);
        console.log(item);
        setLoading(false);
        };

        dataFetch();
    }, []);
    
    return(
    <div className="App">
        <h1>CATEGORY</h1>
        {loading ? <div>...loading</div> : <div className="first">{data.map((item) =>{
          return(
            <Link to={`/Category/${item.strCategory}`}>
              <div className="categoryIcon">
                <img src={require('./strawberry.png')} name={item.strCategory}></img>
                <h1>{item.strCategory}</h1>
              </div></Link>);
        })}</div>}
    </div>
    );
}

export default Category;