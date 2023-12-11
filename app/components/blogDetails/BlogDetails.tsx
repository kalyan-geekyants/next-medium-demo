import {
  Avatar,
  AvatarImage,
  Box,
  EditIcon,
  InputIcon,
  AddIcon,
  ThreeDotsIcon,
  ShareIcon,
  MessageCircleIcon,
  PlayIcon,
  ArrowUpIcon,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import styles from "./BlogDetails.module.css";
import { ReactNode } from "react";
import Image from "next/image";
import { BlogDetails, useGlobalContext } from "@/app/context/store";
// const uri =
//   "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

const BlogDetails = ({
  title,
  description,
  name,
  uri,
  localImage,
}: BlogDetails) => {
  const { userID } = useGlobalContext();
  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <div className={styles.container}>
        <div className={styles.blog_details}>
          <h1 className={styles.heading}>{title}</h1>
          <h2 className={styles.sub_heading}>
            Enhance Your React.js Development with Best Practices and Proven
            Techniques
          </h2>
          <Box display="flex" flexDirection="row" alignItems="center">
            {uri ? (
              <Avatar size="md" bgColor="#fff">
                <AvatarImage
                  source={{
                    uri: uri,
                  }}
                  sx={{ bgColor: "#fff", width: 45, height: 45 }}
                  alt="author"
                />
              </Avatar>
            ) : (
              <Avatar bgColor="#00579B" size="md" borderRadius="$full">
                <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
                  {userID}
                </AvatarFallbackText>
              </Avatar>
            )}

            <Box pl={10}>
              <p className={styles.author_name}>
                {name} . <span className={styles.follow}>Follow</span>
              </p>
              <p className={styles.blog_date}>12 min read . May 2</p>
            </Box>
          </Box>
          <InteractiveIcons />
          <div className={styles.blog_image}>
            <Image
              alt="blog image"
              src={(localImage as string) || "/assets/image.webp"}
              layout="fill"
            />
          </div>
          <p className={styles.blog_description}>{description}</p>
          <InteractiveIcons />
          <br />
          <br />
        </div>
      </div>
    </Box>
  );
};

export default BlogDetails;

const CustomBox = ({ children }: { children: ReactNode }) => (
  <Box display="flex" flexDirection="row" alignItems="center">
    {children}
  </Box>
);

const InteractiveIcons = () => (
  <div className={styles.interactive_icons_container}>
    {/* Left side icons */}
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width={130}
      justifyContent="space-between"
    >
      <CustomBox>
        <InputIcon as={ArrowUpIcon} size="lg" color="#6B6B6B" />{" "}
        <p style={{ fontSize: "14px", color: "#6B6B6B", marginLeft: 8 }}>465</p>
      </CustomBox>
      <CustomBox>
        <InputIcon as={MessageCircleIcon} size="lg" color="#6B6B6B" />{" "}
        <p style={{ fontSize: "14px", color: "#6B6B6B", marginLeft: 8 }}>8</p>
      </CustomBox>
    </Box>
    {/* Right Side icons */}
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width={200}
      justifyContent="space-between"
    >
      <InputIcon as={AddIcon} size="lg" color="#6B6B6B" />
      <InputIcon as={PlayIcon} size="lg" color="#6B6B6B" />{" "}
      <InputIcon as={ShareIcon} size="lg" color="#6B6B6B" />{" "}
      <InputIcon as={ThreeDotsIcon} size="lg" color="#6B6B6B" />
    </Box>
  </div>
);
