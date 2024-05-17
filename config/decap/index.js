import collections from "./collections";

/**
 * Config for DecapCMS
 * @type {import('decap-cms-core').CmsConfig}
 */

export default {
  load_config_file: false,
  // manages content in the local repo (this should only work for dev)
  local_backend: !import.meta.env.PROD,
  // editorial workflow doesn't work locally
  // so we only enable it in prod
  publish_mode: import.meta.env.PROD ? "editorial_workflow" : "simple",
  backend: {
    name: "github",
    repo: "SasquatchPunter/portfolio-site",
    branch: "master",
    squash_merges: true,
  },
  display_url: `${import.meta.env.BASE_URL}/blog`,
  logo_url: `${import.meta.env.BASE_URL}/favicon.svg`,
  media_folder: "public/uploads/images",
  public_folder: "/uploads/images",
  collections,
};
