import { defineConfig } from "tinacms";

import schema from "./schema";

const branch = process.env.GITHUB_BRANCH || process.env.HEAD || "master";
const clientId = process.env.TINA_CLIENT_ID || "";
const token = process.env.TINA_CLIENT_TOKEN || "";
const basePath = (process.env.TINA_PUBLIC_BASE_PATH || "").replace(/^\/+/, "");

export default defineConfig({
  branch,
  clientId,
  token,
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
