import React from "react";
import { WhoToFollow } from "@/app/types/globalTypes";
import { Avatar, AvatarFallbackText, AvatarImage, Box, Button } from "@gluestack-ui/themed";
import styles from "./WhoToFollow.module.css";

const WhoToFollowCard = ({ uri, name, about }: WhoToFollow) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      pt={16}
      sx={{ _web: { fontFamily: "$mono" } }}
      width={"35%"}
    >
      <div style={{ display: "flex", width: "75%" }}>
        {uri ? (
          <Avatar size="sm">
            <AvatarImage
              source={{
                uri: uri,
              }}
              sx={{ width: 32, height: 32, bgColor: "#fff" }}
              alt="author"
            />
          </Avatar>
        ) : (
          <Avatar bgColor="#00579B" size="sm" borderRadius="$full">
            <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
              {name}
            </AvatarFallbackText>
          </Avatar>
        )}
        <div className={styles.details}>
          <h2 className={styles.heading}>{name}</h2>
          <div className={styles.about}>{about}</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          size="sm"
          variant="outline"
          borderRadius={"$full"}
          borderColor="#242424"
        >
          Follow
        </Button>
      </div>
    </Box>
  );
};

export default WhoToFollowCard;
