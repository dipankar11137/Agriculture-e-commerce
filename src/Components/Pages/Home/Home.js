import React from "react";
import Banner from "./HomeSection/Banner/Banner";
import AgriculturalMedicines from "./HomeSection/Agricultural Medicine/AgriculturalMedicines";
import Add from "./HomeSection/Add/Add";
import AgriculturalEquipments from "./HomeSection/AgriculturalEquipment/AgriculturalEquipments";
import BuyAndSells from "./HomeSection/BuyAndSell/BuyAndSells";
import Footer from "../../Share/Footer";
import Contact from "./HomeSection/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Add />
      <BuyAndSells />
      <AgriculturalMedicines />
      <AgriculturalEquipments />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
