import React from "react";
import Banner from "./HomeSection/Banner/Banner";
import AgriculturalMedicines from "./HomeSection/Agricultural Medicine/AgriculturalMedicines";
import Add from "./HomeSection/Add/Add";
import AgriculturalEquipments from "./HomeSection/AgriculturalEquipment/AgriculturalEquipments";
import BuyAndSells from "./HomeSection/BuyAndSell/BuyAndSells";
import Footer from "../../Share/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Add />
      <BuyAndSells />
      <AgriculturalMedicines />
      <AgriculturalEquipments />
      <Footer />
    </div>
  );
};

export default Home;
