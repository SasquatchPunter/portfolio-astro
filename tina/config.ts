import { defineConfig } from "tinacms";

import schema from "./schema";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.HEAD || "master";

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: "4c89abb5-e39f-41c3-9e51-319e5b4472ae",
  // Get this from tina.io
  token: "de4d08b219f833c33a31cf1b2a90389702ee5c66",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema,
});
