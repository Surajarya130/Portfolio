import {
  // Navbar ,
  HeroSeciton,
  MySkills,
  MyServices,
  Projects,
  GetInTouch,
  WorkExperience,
  // TestimonialSwiper,
} from "@/components/index";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main>
      <HeroSeciton />
      <MySkills />
      <MyServices />
      <WorkExperience />
      <Projects />
      {/* <TestimonialSwiper /> */}
      <GetInTouch />
    </main>
  );
}
