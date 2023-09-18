import { gitIcon, insta, linkedin, twitter } from "@/public/assets";
import Image from "next/image";

const SocialConnection = () => {
  return (
    <div className="flex justify-center pt-3">
      <Image className="mx-9 ml-0" src={insta} alt="insta" />
      <Image className="mx-9" src={linkedin} alt="linkedIn" />
      <Image className="mx-9" src={gitIcon} alt="github" />
      <Image className="mx-9 mr-0" src={twitter} alt="twitter" />
    </div>
  );
};

export default SocialConnection;
