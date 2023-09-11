import {
  Navbar,
  HeroSeciton,
  MySkills,
  MyServices,
  Projects,
  GetInTouch,
  WorkExperience,
} from "@/components/index";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSeciton />
      <MySkills />
      <MyServices />
      <WorkExperience />
      <Projects />
      <GetInTouch />
    </main>
  );
}
