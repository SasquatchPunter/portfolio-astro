/**
 * Blog Collection config for DecapCMS
 * @type {import('decap-cms-core').CmsCollection}
 */
export default {
  name: "blog",
  label: "Blog",
  label_singular: "Blog Post",
  folder: "src/content/blog",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Post Title",
      name: "title",
      widget: "string",
      hint: "Display title for the blog post",
    },
    {
      label: "Tags",
      name: "tags",
      widget: "list",
      hint: "Search tags for the post",
    },
    { label: "Publish Date", name: "date", widget: "datetime" },
    {
      label: "Featured Image",
      name: "featured_image",
      widget: "image",
      required: false,
    },
    { label: "Body", name: "body", widget: "markdown" },
  ],
  extension: "md",
};
