"use client";
import { useEffect } from "react";
import { useGlobalContext } from "./context/store";
import { useRouter } from "next/navigation";
import { blogs } from "../data/data.json";
import { Box } from "@gluestack-ui/themed";
import Navigation from "./components/navigation/Navigation";
import withAuthHOC from "./hoc/withAuthHOC";

const Home = () => {
  return (
    <main>
      <Navigation />
      <Box
        display="flex"
        flex={1}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        height={"90vh"}
      >
        <h1>Medium</h1>
      </Box>
    </main>
  );
};

export default withAuthHOC(Home);
