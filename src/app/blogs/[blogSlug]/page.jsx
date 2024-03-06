import { getSingleBlog } from "@/data/blog";

const SingleBlog = async ({ params }) => {
  const { blogSlug } = params;
  const blog = await getSingleBlog(blogSlug);
  return (
    <div>
      <h2>Blog details</h2>
      <h1>{blog.title}</h1>
    </div>
  );
};

export default SingleBlog;
