import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Post } from "./constants/BlogPosts";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const urlFor = (source: SanityImageSource) => (projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null);
const { projectId, dataset } = client.config();

export const sanityToPost = (post: SanityDocument, largeImage = false): Post => {
  const post2: Post = {
    id: "",
    title: "",
    label: "",
    image: "",
    description: "",
    body: "",
    slug: "",
    date: new Date(),
    author: {
      name: "",
      title: "",
      avatar: "",
    },
  };
  return post2;
  const postImageUrl = post.image
    ? urlFor(post.image)
        ?.width(largeImage ? 1100 : 550)
        .url()
    : null;

  const avatarImageUrl = post.author?.avatar ? urlFor(post.author.avatar)?.width(50).height(50).url() : null;

  const author = {
    name: post.author?.name,
    title: post.author?.title,
    avatar: avatarImageUrl ?? "",
  };

  return {
    id: post._id,
    title: post.title,
    label: post.label,
    image: postImageUrl ?? "",
    description: post.description,
    body: post.body,
    slug: post.slug.current,
    date: new Date(post.publishedAt),
    author: author,
  };
};
