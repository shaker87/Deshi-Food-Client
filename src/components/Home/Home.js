import React from "react";
import "./Home.css";
import Cities from "../Cities/Cities";
import GetFoodWithDFood from "../GetFoodWithDFood/GetFoodWithDFood";
import HeroSlider from "../HeroSlider/HeroSlider";
import OwnItems from "../OwnItems/OwnItems";
import OwnVehicle from "../OwnVehicle/OwnVehicle";
import WhyChoose from "../WhyChoose/WhyChoose";


export default function Home() {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <HeroSlider />
        <WhyChoose />
        <GetFoodWithDFood />
        <OwnItems />
        <OwnVehicle />
        <Cities />
      </div>
    </>
  );
}
