// skills schema

const skills = {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "A title for the skills document",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "skillsList",
      title: "Skills List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "skillName",
              title: "Skill Name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "skillImage",
              title: "Skill Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};

export default skills;
