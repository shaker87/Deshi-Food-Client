import React from "react";
import "./App.css";
import Navbar from "./components/SharedComponents/Navbar";
import food_bg from './images/food-bg.jpg'

function App() {
  return (
    <>
      <Navbar />

      <div className="food-bg">
        <img src={food_bg} alt="" className="w-100" srcset="" />
      </div>
    </>
  );
}

export default App;
