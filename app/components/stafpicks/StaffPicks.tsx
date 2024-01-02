import React from "react";
import { Box } from "@gluestack-ui/themed";
import styles from "./StaffPick.module.css";
import { StarPicksProps } from "@/app/types/globalTypes";
import StarPick from "./StaffPick";
import Heading from "../Heading";

const StafPicks = ({ staffPicks }: StarPicksProps) => {
  return (
    <Box mt={20}>
      <Heading title=" Staff Picks" />
      {staffPicks.map((chatData: any, index: number) => (
        <StarPick
          key={index}
          uri={chatData?.uri}
          name={chatData?.name}
          tagLine={chatData?.tagLine}
        />
      ))}
      <a href="/" className={styles.full_list}>
        See the full list
      </a>
    </Box>
  );
};

export default StafPicks;
