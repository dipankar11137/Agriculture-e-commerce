import React from "react";
import Banner from "./HomeSection/Banner/Banner";
import AgriculturalMedicines from "./HomeSection/Agricultural Medicine/AgriculturalMedicines";
import Add from "./HomeSection/Add/Add";

const Home = () => {
  return (
    <div>
      <Banner />
      <Add />
      <AgriculturalMedicines />
    </div>
  );
};

export default Home;
