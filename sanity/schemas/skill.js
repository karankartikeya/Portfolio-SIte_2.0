import { stringify } from "querystring";

export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the String",
      type: "string",
    },
    {
      name:"progress",
      title: "Progress",
      type: "number",
      description: "SKill can be rated between 0 to 100 only",
      validation : (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
