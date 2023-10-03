import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/mdxUtils.mjs";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        mdx({
            remarkPlugins: [
                remarkGfm,
                rehypeSlug,
                remarkReadingTime,
                rehypeAutolinkHeadings,
                rehypeExternalLinks,
            ],
            syntaxHighlight: "shiki",
            shikiConfig: {
                theme: "one-dark-pro",
            },
        }),
        prefetch(),
    ],
});
