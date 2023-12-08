import { Box, Avatar, AvatarImage, AddIcon, RemoveIcon, ThreeDotsIcon } from "@gluestack-ui/themed";
import styles from "./Blogs.module.css";
import Image from "next/image";

const Blogs = ({blogs}: {blogs: any[]}) => {
  return (
    <Box>
      {blogs.map((blog: any, index: number) => (
        <Box display="flex" key={index} width={"100%"} pt={24}>
          <Box display="flex" flexDirection="row" alignItems="center" mb={5}>
            <Avatar size="sm" bgColor="#fff">
              <AvatarImage
                source={{
                  uri: blog.uri,
                }}
                sx={{ width: 28, height: 28, bgColor: "#fff" }}
                alt="author"
              />
            </Avatar>
            <p className={styles.author_name}>{blog.name}</p>
            <p className={styles.blog_date}>. May 2</p>
          </Box>
          {/* <Box display="flex" flexDirection="row">
            <Box display="flex">
              <h2 className={styles.blog_title}>{blog.title}</h2>
              <div className={styles.blog_description}>{blog.description}</div>
            </Box>
            <Image alt="blog image" src="/assets/image.webp" width={40} height={40} />
          </Box> */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.blog_details}>
              <h2 className={styles.blog_title}>{blog.title}</h2>
              <div className={styles.blog_description}>{blog.description}</div>
              <div className={styles.action_icons}>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <div className={styles.tag}>{blog.tag}</div>
                  <div className={styles.read}>4 min read</div>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <AddIcon size="lg" margin={10}/>
                  <RemoveIcon size="lg" margin={10} />
                  <ThreeDotsIcon size="lg" ml={10}/>
                </Box>
              </div>
            </div>
            <div className={styles.blog_image}>
              <Image
                alt="blog image"
                src="/assets/image.webp"
                width={100}
                height={100}
              />
            </div>
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default Blogs;
