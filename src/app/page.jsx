"use client";

//import Image from "next/image";
import dynamic from "next/dynamic";
import Hero from "../Componants/HomeSection/Hero.jsx"
  import Weoffer from "../Componants/HomeSection/Weoffer.jsx"
import About from "../Componants/HomeSection/AboutSection.jsx";
import GroupCompanies from "../Componants/HomeSection/GroupCompanies.jsx"
import Whoweare from "../Componants/HomeSection/Whoweare.jsx"
import Contact from "./contact/page.jsx"
import Ourservices from "../Componants/HomeSection/Ourservices.jsx"
import Plan from "../Componants/HomeSection/Plan.jsx"
import Trust from "../Componants/HomeSection/Trust.jsx"
import Technologies from "../Componants/HomeSection/Technologies.jsx"

// Lazy load heavy components
const FlyingBirdsBackground = dynamic(() => import("../ui/FlyingBirdsBackground.jsx"), {
  ssr: false,
  loading: () => <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-t from-white to-white -z-10" />
});

export default function HomePage() {
  return (
    <div className="">
      
      <FlyingBirdsBackground />
      
      <Hero />
      <Weoffer/>
      <About/>
      <GroupCompanies/>
      <Whoweare/>
      <Ourservices/>
      <Plan />
      <Trust />
      
      <Technologies />
     
    {/* <Contact /> */}
    </div>
  );
}
