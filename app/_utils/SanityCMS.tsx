import { Post } from "./constants/BlogPosts";
import { SanityDocument } from "next-sanity";


export const sanityToPost = (post: SanityDocument, largeImage = false): Post => {
  // const postImageUrl = post.image
  //   ? urlFor(post.image)
  //       ?.width(largeImage ? 1100 : 550)
  //       .url()
  //   : null;

  // const avatarImageUrl = post.author?.avatar ? urlFor(post.author.avatar)?.width(50).height(50).url() : null;

  // const author = {
  //   name: post.author?.name,
  //   title: post.author?.title,
  //   avatar: avatarImageUrl ?? "",
  // };
  const author = {
    name: "",
    title: "",
    avatar: largeImage ? "" : "",
  };

  return {
    id: post._id,
    title: post.title,
    label: post.label,
    image:  "",
    description: post.description,
    body: post.body,
    slug: post.slug.current,
    date: new Date(post.publishedAt),
    author: author,
  };
};
