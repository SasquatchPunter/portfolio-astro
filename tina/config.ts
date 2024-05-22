import { defineConfig } from "tinacms";

import schema from "./schema";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.HEAD || "master";
const basePath = (process.env.TINA_PUBLIC_BASE_PATH || "").replace(/^\/+/, "");

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_CLIENT_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath,
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema,
});
