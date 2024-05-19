import type { Schema } from "tinacms";

export default {
  collections: [
    {
      name: "blog",
      label: "Blog Posts",
      path: "src/content/blog",
      format: "md",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Post Title",
          required: true,
        },
        {
          type: "string",
          name: "tags",
          label: "Tags",
          list: true,
        },
        {
          type: "datetime",
          name: "posted",
          label: "Date Posted",
          required: true,
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
