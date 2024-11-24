import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Post } from "./constants/BlogPosts";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const urlFor = (source: SanityImageSource) => (projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null);
const { projectId, dataset } = client.config();

export interface SanityPost {
  _id: string;
  title: string;
  label: string;
  image?: SanityImageSource;
  description: string;
  body: string;
  slug: {
    current: string;
  };
}

export const sanityToPost = (post: SanityPost): Post => {
  const postImageUrl = post.image ? urlFor(post.image)?.width(550).height(310).url() : null;
  return {
    id: post._id,
    title: post.title,
    label: post.label,
    image: postImageUrl ?? "",
    description: post.description,
    body: post.body,
    slug: post.slug.current,
  };
};
