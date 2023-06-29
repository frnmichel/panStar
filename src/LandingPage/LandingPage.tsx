import { useRef } from "react";
import Intro from "./sections/Intro/Intro";
import SecondSection from "./sections/SecondSection/SecondSection";
import MasterTimelineContextProvider from "./context/MasterTimelineContext";
import "./index.css";
import ThirdSection from "./sections/ThirdSection/ThirdSection";
import MicrowaveSection from "./sections/MicrowaveSection/MicrowaveSection";
import SliderSection from "./sections/SliderSection/SliderSection";
import BuyButton from "./components/BuyButton/BuyButton";

function LandingPage() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const refDependencies = {
    sceneRef,
  };

  return (
    <MasterTimelineContextProvider refDependencies={refDependencies}>
      <main ref={sceneRef} className="scene">
        <Intro />
        <SecondSection />
        <ThirdSection />
        <MicrowaveSection />
        <SliderSection />
      </main>
      <BuyButton />
    </MasterTimelineContextProvider>
  );
}

export default LandingPage;
