import React from "react";
import Footer from "../../Share/Footer";
import AgriculturalMedicines from "./HomeSection/Agricultural Medicine/AgriculturalMedicines";
import AgriculturalEquipments from "./HomeSection/AgriculturalEquipment/AgriculturalEquipments";
import BuyAndSells from "./HomeSection/BuyAndSell/BuyAndSells";
import Contact from "./HomeSection/Contact/Contact";
import BackgroundImage from "./Test/BackgroundImage";

const Home = () => {
  return (
    <div>
      <BackgroundImage/>
      {/* <Banner /> */}
      {/* <Add /> */}
      <BuyAndSells />
      <AgriculturalMedicines />
      <AgriculturalEquipments />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
