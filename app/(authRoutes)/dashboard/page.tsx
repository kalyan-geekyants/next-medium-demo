"use client";
import { Box } from "@gluestack-ui/themed";
import StafPicks from "../../components/stafpicks/StaffPicks";
import Tags from "../../components/tags/Tags";
import Blogs from "../../components/blogs/Blogs";
import WhoToFollow from "../../components/whoToFollow/WhoToFollow";
import {
  whoToFollow,
  staffPicks,
  recommendedTopics,
} from "../../../data/data.json";
import { useGlobalContext } from "../../context/store";
import Navigation from "../../components/navigation/Navigation";
import withAuthHOC from "../../hoc/withAuthHOC";
import Heading from "@/app/components/Heading";

const dashboardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
};

const Dashboard = () => {
  const { blogs } = useGlobalContext();
  return (
    <main>
      <Navigation />
      <Box {...dashboardContainer}>
        <Box width={"50%"} pt={50}>
          <Blogs blogs={blogs} />
        </Box>
        <Box
          width={"25%"}
          pl={40}
          pt={50}
          borderLeftWidth={1}
          borderLeftColor="#F2F2F2"
        >
          <StafPicks staffPicks={staffPicks} />
          <Tags tags={recommendedTopics} />
          <WhoToFollow whoToFollow={whoToFollow} />
        </Box>
      </Box>
    </main>
  );
};

export default withAuthHOC(Dashboard);
