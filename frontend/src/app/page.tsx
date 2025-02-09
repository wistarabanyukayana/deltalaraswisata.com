import HeroSlider from "@/components/HeroSlider";
import FeatureGrid from "@/components/FeatureGrid";
import PackageCarousel from "@/components/PackageCarousel";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroSlider />
      <FeatureGrid />
      <PackageCarousel />
    </main>
  );
}
