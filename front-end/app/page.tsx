import HeroSeciton from "@/components/HeroSection/HeroSeciton";
import { Navbar } from "@/components/index";

export default function Home() {
  return (
    <main className="flex-col">
      <Navbar />
      <HeroSeciton />
    </main>
  );
}
