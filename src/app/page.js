//import Image from "next/image";
import Hero from "../Componants/HomeSection/Hero.jsx"
import FlyingBirdsBackground from "../ui/FlyingBirdsBackground.jsx";
  import Weoffer from "../Componants/HomeSection/Weoffer.jsx"
import About from "../Componants/HomeSection/AboutSection.jsx";
import GroupCompanies from "../Componants/HomeSection/GroupCompanies.jsx"
import Whoweare from "../Componants/HomeSection/Whoweare.jsx"
import Contact from "./contact/page"
import Ourservices from "../Componants/HomeSection/Ourservices.jsx"
import Plan from "../Componants/HomeSection/Plan.jsx"
import Trust from "../Componants/HomeSection/Trust.jsx"
import Technologies from "../Componants/HomeSection/Technologies.jsx"


export default function HomePage() {
  return (
    <div className="">
      <FlyingBirdsBackground/>
      
      <Hero />
      <Weoffer/>
      <About/>
      <GroupCompanies/>
      <Whoweare/>
      <Ourservices/>
      <Plan />
      <Trust />
      
      <Technologies />
      <Contact/>
      
      
    </div>
  );
}
