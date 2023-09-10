import { Navbar } from "@/components/index";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-col">
      <Navbar />
      <Button variant="outline"> Click Me</Button>
      <p className="heading-1 text-accentDef-primaryLight">Suraj Arya</p>
      <p className="heading-2 text-accentDef-primaryDark">Suraj Arya</p>
      <p className="heading-3">Suraj Arya</p>
      <p className="base-regular">Suraj Arya</p>
      <p className="base-bold">Suraj Arya</p>
      <p className="para-regular">Suraj Arya</p>
      <p className="para-bold">Suraj Arya</p>
      <p className="body-regular">Suraj Arya</p>
      <p className="body-bold">Suraj Arya</p>
      <p className="small-regular">Suraj Arya</p>
      <p className="small-bold">Suraj Arya</p>
    </main>
  );
}
