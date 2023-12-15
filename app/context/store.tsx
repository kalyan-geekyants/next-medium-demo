'use client';
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { BlogDetails } from '../types/globalTypes';

interface ContextProps {
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
  blogs: any[];
  setBlogs: Dispatch<SetStateAction<BlogDetails[]>>;
}

const GloblaContext = createContext<ContextProps>({
  userID: '',
  setUserID: (): string => '',
  blogs: [],
  setBlogs: (): BlogDetails[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userID, setUserID] = useState('kanike_541');
  const [blogs, setBlogs] = useState<BlogDetails[]>([]);
  return (
    <GloblaContext.Provider value={{ userID, setUserID, blogs, setBlogs }}>
      {children}
    </GloblaContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GloblaContext);
