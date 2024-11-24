import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Post } from "./constants/BlogPosts";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const urlFor = (source: SanityImageSource) => (projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null);
const { projectId, dataset } = client.config();

export const sanityToPost = (post: any): Post => {
  const postImageUrl = post.image ? urlFor(post.image)?.width(550).height(310).url() : null;
  return {
    id: post._id,
    title: post.title,
    label: post.label,
    image: postImageUrl ?? "",
    description: post.description,
    html: post.body,
    slug: post.slug.current,
  };
};
