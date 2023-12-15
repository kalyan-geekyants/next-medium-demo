// import { Box, Text } from "@gluestack-ui/themed";
// import React from "react";

// interface SampleProps {
//   title: string;
//   bgColor?: string;
//   color?: string;
// }

// const Sample = ({ title, bgColor, color, ...props }: SampleProps) => {
//   return (
//     <Box
//       bgColor="$red500"
//       // style={{backgroundColor: `${bgColor}`,color:`${color}`, width: 'auto'}}
//     >
//       <Text color="$white">{title}</Text>
//     </Box>
//   );
// };

// export default Sample;

import React from "react";
import {
  Avatar,
  AvatarImage,
  Box,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import styles from "./StaffPick.module.css";
import { StarPick } from "@/app/types/globalTypes";
import {} from "@gluestack-ui/themed";
const Sample = ({ uri, name, tagLine }: StarPick) => {
  return (
    <Box display="flex" mb={15} sx={{ _web: { fontFamily: "$mono" } }}>
      <Box display="flex" flexDirection="row" alignItems="center" mb={5}>
        {uri ? (
          <Avatar size="sm" bgColor="#fff">
            <AvatarImage
              source={{
                uri: uri,
              }}
              sx={{ width: 28, height: 28, bgColor: "#fff" }}
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
        <p className={styles.staff_pick_name}>{name}</p>
      </Box>
      <h2 className={styles.staff_pick_heading}>{tagLine}</h2>
    </Box>
  );
};

export default Sample;
