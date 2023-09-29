import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profession,

    //   profileImage {alt, "image": asset->url},

      shortBio,
      location,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
    
	  //   skills

    }`,
  );
}

export async function getSkills() {
  return client.fetch(groq`*[_type == "skills"]{
    _id,
    title,
    skillsList
  }`);
}
