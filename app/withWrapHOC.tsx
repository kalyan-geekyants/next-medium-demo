import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useGlobalContext } from "./context/store";
import Blogs from "./components/blogs/Blogs";

const withWrapper = (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => {
    const { userID, setUserID, setBlogs } = useGlobalContext();
    const router = useRouter();
    useEffect(() => {
      if (userID !== "") {
        // setBlogs(blogs);
        router.push("/dashboard");
      } else {
        const id = localStorage.getItem("userID");
        if (id) {
          setUserID(id);
        }
      }
    }, [userID]);
    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {};

  return hocComponent;
};

export default withWrapper;
