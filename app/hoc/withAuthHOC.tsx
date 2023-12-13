import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useGlobalContext } from "../context/store";
import { blogs } from "../../data/data.json";

const withAuthHOC = (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => {
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
          setBlogs(blogs);
        }else{
          router.push("/");
        }
      }
    }, [userID]);
    return <WrappedComponent {...props} />;
  };

  return hocComponent;
};

export default withAuthHOC;
