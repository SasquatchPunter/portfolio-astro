/**
 * Blog Collection config for DecapCMS
 * @type {import('decap-cms-core').CmsCollection}
 */
export default {
  name: "projects",
  label: "Projects",
  label_singular: "Project",
  folder: "src/content/projects",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Project Title",
      name: "title",
      widget: "string",
      hint: "Display title for the project",
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      hint: "Card image that displays the project",
    },
    {
      label: "Summary",
      name: "summary",
      widget: "string",
      hint: "A short description of the project",
    },
  ],
  extension: "json",
};
