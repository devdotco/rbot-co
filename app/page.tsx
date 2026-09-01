import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import RobotGrid from "@/components/home/RobotGrid";
import Manufacturers from "@/components/home/Manufacturers";
import RaaS from "@/components/home/RaaS";
import ROICalculator from "@/components/home/ROICalculator";
import Industries from "@/components/home/Industries";
import Platform from "@/components/home/Platform";
import Integrations from "@/components/home/Integrations";
import Partner from "@/components/home/Partner";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Process />
      <RobotGrid />
      <Manufacturers />
      <RaaS />
      <ROICalculator />
      <Industries />
      <Platform />
      <Integrations />
      <Partner />
      <FinalCTA />
    </>
  );
}
