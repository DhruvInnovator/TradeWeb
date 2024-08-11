import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoPage from "@/components/InfoPage";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import DisplayPage from "@/components/DisplayPage";


export default function Home() {
  return (
    <main>
    <Navbar/>
    <HeroSection />
    <InfoPage />
    <DisplayPage />
    </main>
  );
}
