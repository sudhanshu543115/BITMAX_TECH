//import Image from "next/image";
import Hero from "../Componants/HomeSection/Hero.jsx"
import FlyingBirdsBackground from "../ui/FlyingBirdsBackground.jsx";
  import Weoffer from "../Componants/HomeSection/Weoffer.jsx"
import About from "../Componants/HomeSection/AboutSection.jsx";
import GroupCompanies from "../Componants/HomeSection/GroupCompanies.jsx"

export default function HomePage() {
  return (
    <div className="">
      <FlyingBirdsBackground/>
      <Hero />
      <Weoffer/>
      <About/>
      <GroupCompanies/>
      
    </div>
  );
}
