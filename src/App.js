import './App.css';
import React, {useState, useEffect} from 'react';
import Category from './Category';
import DrinkList from "./DrinkList";
import Drink from "./Drink";
import {Link, Route, Routes} from "react-router-dom";


function App() {

  return (
    <div>
    <nav>
      <li><Link to="/">CATEGORY</Link></li>
    </nav>
    <Routes>
      <Route path="/" element={<Category /> } />
      <Route path="/Category/:id" element={<DrinkList /> } />
      <Route path="/Drink/:id" element={<Drink /> } />
    </Routes>
    </div>
  );
}

export default App;