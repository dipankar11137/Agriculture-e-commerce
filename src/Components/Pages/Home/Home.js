import React from "react";
import Banner from "./HomeSection/Banner/Banner";
import AgriculturalMedicines from "./HomeSection/Agricultural Medicine/AgriculturalMedicines";
import Add from "./HomeSection/Add/Add";
import AgriculturalEquipments from "./HomeSection/AgriculturalEquipment/AgriculturalEquipments";
import BuyAndSells from "./HomeSection/BuyAndSell/BuyAndSells";

const Home = () => {
  return (
    <div>
      <Banner />
      <Add />
      <BuyAndSells />
      <AgriculturalMedicines />
      <AgriculturalEquipments />
    </div>
  );
};

export default Home;
