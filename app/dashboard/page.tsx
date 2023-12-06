"use client";
import { Box } from "@gluestack-ui/themed";
import Navigation from "../components/navigation";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main>
      <Navigation />
      <Box
        display="flex"
        flexDirection="row"
        width={"100%"}
        justifyContent="space-evenly"
      >
        <Box
          width={"50%"}
          height={"100vh"}
          pt={50}  
        >
          Blogs
        </Box>
        <Box 
        width={"30%"}
         pl={40} pt={50}           borderLeftWidth={1}
         borderLeftColor="#F2F2F2">
          Staff Picks
        </Box>
      </Box>
    </main>
  );
};

export default Dashboard;
