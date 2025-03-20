import { NavigationBarSection } from "@/components/sections/NavigationBarSection/NavigationBarSection";
import { HeroImageSection } from "@/components/sections/HeroImageSection/HeroImageSection";

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full">
        <NavigationBarSection />
        <HeroImageSection />
      </div>
    </div>
  );
}