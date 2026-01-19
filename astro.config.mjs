// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://fredhsu-tutorial-blog.netlify.app/",
  integrations: [preact()],
});