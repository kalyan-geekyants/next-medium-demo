"use client";
import { useEffect } from "react";
import { useGlobalContext } from "./context/store";
import { useRouter } from "next/navigation";
import { blogs } from "../data/data.json";
import { Box } from "@gluestack-ui/themed";
import Navigation from "./components/navigation";

const Home = () => {
  const { userID, setUserID, setBlogs } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    if (userID !== "") {
      setBlogs(blogs);
      router.push("/dashboard");
    } else {
      const id = localStorage.getItem("userID");
      if (id) {
        setUserID(id);
      }
    }
  }, [userID]);
  return (
    <main>
      <Navigation />
      <Box display="flex" flex={1} justifyContent="center" alignItems="center" width={"100%"} height={"90vh"}><h1>Medium</h1></Box>
    </main>
  );
};

export default Home;
