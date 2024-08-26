import React, { useState } from 'react'
import "./Home.css";
import Header from '../../Components/Header/Header';
import Menu from '../../Components/ExploreMenu/Menu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDown from '../../Components/AppDownload/AppDown';

const Home = () => {

    const[category,setCategory]=useState("All");
  return (
    <>
        
    <Header/>
    <Menu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDown/>

    </>
  )
}

export default Home