import type { Config } from "@react-router/dev/config";
import { getAllArticlesSlug } from "./app/services.server";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender({ getStaticPaths }) {
    const paths = getAllArticlesSlug().map((slug) => (`/${slug}`));
    return [ ...getStaticPaths(), ...paths ]
  },
  routeDiscovery: {
    mode: "initial",
  }
} satisfies Config;
