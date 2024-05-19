import type { Schema } from "tinacms";

export default {
  collections: [
    {
      name: "blog",
      label: "Blog Post",
      path: "src/content/blog",
      format: "md",
      ui: {
        filename: {
          readonly: true,
          slugify(values) {
            return `${
              values.title
                ?.toLowerCase()
                .replace(/[^\w]+/g, "-")
                .replace(/^-+|-+$/g, "") || ""
            }`;
          },
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Post Title",
          required: true,
          isTitle: true,
          ui: {
            validate(value: string) {
              if (value === undefined || value.length === 0) {
                return "Title is required!";
              }
            },
          },
        },
        {
          type: "string",
          name: "tags",
          label: "Tags",
          list: true,
          options: ["first-post", "programming"],
        },
        {
          type: "datetime",
          name: "date",
          label: "Publish Date",
          required: true,
          ui: {
            format() {
              return Date.now();
            },
          },
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
    },
  ],
} as Schema;
