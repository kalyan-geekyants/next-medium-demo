import { Box } from "@gluestack-ui/themed";
import { useGlobalContext } from "@/app/context/store";
import Blog from "./Blog";

const Blogs = ({ blogs }: { blogs: any[] }) => {
  const { userID } = useGlobalContext();
  console.log("Blogs", blogs);
  return (
    <Box>
      {blogs.map((blog: any, index: number) => (
        <Blog
          uri={blog?.uri}
          title={blog.title}
          description={blog.description}
          localImage={blog?.localImage}
          tag={blog?.tag}
          userID={userID}
          name={blog?.name}
          slug={blog?.slug}
        />
      ))}
    </Box>
  );
};

export default Blogs;
