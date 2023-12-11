import { BlogDetails } from "@/app/context/store";
import React from "react";
import {
  Box,
  Avatar,
  AvatarImage,
  AddIcon,
  RemoveIcon,
  ThreeDotsIcon,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import Image from "next/image";
import styles from "./Blogs.module.css";

interface BlogProps extends BlogDetails {
  userID: string;
}

const Blog = ({
  uri,
  title,
  description,
  localImage,
  tag,
  userID,
  name,
}: BlogProps) => {
  return <p>Hi there</p>;
  // return;
  // <Box display="flex" width={"100%"} pt={24}>
  //   <Box display="flex" flexDirection="row" alignItems="center" mb={5}>
  //     {uri ? (
  //       <Avatar size="sm" bgColor="#fff">
  //         <AvatarImage
  //           source={{
  //             uri: uri,
  //           }}
  //           sx={{ width: 28, height: 28, bgColor: "#fff" }}
  //           alt="author"
  //         />
  //       </Avatar>
  //     ) : (
  //       <Avatar bgColor="#00579B" size="sm" borderRadius="$full">
  //         <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
  //           {userID}
  //         </AvatarFallbackText>
  //       </Avatar>
  //     )}
  //     <p className={styles.author_name}>{name ?? userID}</p>
  //     <p className={styles.blog_date}>. May 2</p>
  //   </Box>
  //   <div style={{ display: "flex", justifyContent: "space-between" }}>
  //     <div className={styles.blog_details}>
  //       <h2 className={styles.blog_title}>{title}</h2>
  //       <div className={styles.blog_description}>{description}</div>
  //       <div className={styles.action_icons}>
  //         <Box display="flex" flexDirection="row" alignItems="center">
  //           <div className={styles.tag}>{tag}</div>
  //           <div className={styles.read}>4 min read</div>
  //         </Box>
  //         <Box display="flex" flexDirection="row" alignItems="center">
  //           <AddIcon size="lg" margin={10} />
  //           <RemoveIcon size="lg" margin={10} />
  //           <ThreeDotsIcon size="lg" ml={10} />
  //         </Box>
  //       </div>
  //     </div>
  //     <div className={styles.blog_image}>
  //       <Image
  //         alt="blog image"
  //         src={localImage ?? "/assets/image.webp"}
  //         width={100}
  //         height={100}
  //       />
  //     </div>
  //   </div>
  // </Box>;
};

export default Blog;
