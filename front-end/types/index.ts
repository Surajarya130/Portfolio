// types/index.ts

import { url } from "inspector";
import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;

  //   profileImage: {
  //     alt: string;
  //     image: string;
  //   };

  profession: string;

  shortBio: string;
  email: string;

  // PortableTextBlock is a unique type coming from Sanity that properly defines the data type for the rich text editor.
  //   fullBio: PortableTextBlock[];

  location: string;
  resumeURL: string;
  socialLinks: string[];

  //   skills: string[];
};

export type SkillsType = {
  _id: string;
  title: string;
  skillsList: {
    skillName: string;
    skillImage: {
      asset: {
        _ref: string;
      };
    };
  }[];
};
