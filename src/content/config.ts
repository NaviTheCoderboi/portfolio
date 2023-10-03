import { z, defineCollection } from "astro:content";
import type { ImageFunction } from "astro:content";

// define blog model
const blogModel = ({ image }: { image: ImageFunction }) => {
    return z.object({
        title: z.string().min(1).max(100),
        description: z.string(),
        banner: image(),
        tags: z.array(z.string()),
        blogBannerImage: z.object({
            src: image(),
            alt: z.string(),
        }),
        postedOn: z.coerce.date(),
        updatedOn: z.coerce.date(),
    });
};
// blog collection
const Blog = defineCollection({
    type: "content",
    schema: ({ image }) => blogModel({ image }),
});

export const collections = {
    blog: Blog,
};
