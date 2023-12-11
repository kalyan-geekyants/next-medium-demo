"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface BlogDetails {
  uri?: string;
  title: string;
  description: string;
  tag?: string;
  localImage?: string;
  name?: string;
  slug?: string;
}

interface ContextProps {
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
  blogs: any[];
  setBlogs: Dispatch<SetStateAction<BlogDetails[]>>;
}

const GloblaContext = createContext<ContextProps>({
  userID: "",
  setUserID: (): string => "",
  blogs: [],
  setBlogs: (): BlogDetails[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userID, setUserID] = useState("");
  const [blogs, setBlogs] = useState<BlogDetails[]>([]);
  return (
    <GloblaContext.Provider value={{ userID, setUserID, blogs, setBlogs }}>
      {children}
    </GloblaContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GloblaContext);
