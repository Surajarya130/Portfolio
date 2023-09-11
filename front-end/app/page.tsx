import {
  Navbar,
  HeroSeciton,
  MySkills,
  MyServices,
  Projects,
  GetInTouch,
} from "@/components/index";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSeciton />
      <MySkills />
      <MyServices />
      <Projects />
      <GetInTouch />
    </main>
  );
}
