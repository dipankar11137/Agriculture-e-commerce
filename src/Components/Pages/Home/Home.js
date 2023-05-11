import React from "react";
import Banner from "./HomeSection/Banner/Banner";
import AgriculturalMedicines from "./HomeSection/Agricultural Medicine/AgriculturalMedicines";
import Add from "./HomeSection/Add/Add";
import AgriculturalEquipments from "./HomeSection/AgriculturalEquipment/AgriculturalEquipments";

const Home = () => {
  return (
    <div>
      <Banner />
      <Add />
      <AgriculturalMedicines />
      <AgriculturalEquipments />
    </div>
  );
};

export default Home;
