"use client";
import { Box } from "@gluestack-ui/themed";
import Navigation from "../components/navigation";
import StafPicks from "../components/stafpick/StaffPick";
import Tags from "../components/tags/Tags";
import Blogs from "../components/blogs/Blogs";
import WhoToFollow from "../components/whoToFollow/WhoToFollow";
import {blogs, whoToFollow,staffPicks, recommendedTopics } from "../../data/data.json";

const Dashboard = () => {
  return (
    <main>
      <Navigation />
      <Box
        display="flex"
        flexDirection="row"
        width={"100%"}
        justifyContent="space-evenly"
      >
        <Box width={"50%"} height={"100vh"} pt={50}>
          <Blogs blogs={blogs} />
        </Box>
        <Box
          width={"25%"}
          pl={40}
          pt={50}
          borderLeftWidth={1}
          borderLeftColor="#F2F2F2"
        >
          <Heading title=" Staff Picks" />
          <StafPicks staffPicks={staffPicks} />
          <br />
          <br />
          <Heading title="Recommended Topics" />
          <Tags tags={recommendedTopics} />
          <br />
          <br />
          <Heading title="Who to follow" />
          <WhoToFollow whoToFollow={whoToFollow}/>
        </Box>
      </Box>
    </main>
  );
};

export default Dashboard;

export const Heading = ({ title }: { title: string }) => (
  <h2
    style={{
      fontWeight: 500,
      fontSize: "16px",
      margin: 0,
      paddingBottom: "16px",
    }}
  >
    {title}
  </h2>
);
