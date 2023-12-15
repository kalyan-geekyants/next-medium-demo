import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/store';
import { blogs } from '../../data/data.json';

const withAuthHOC = (WrappedComponent: any) => {
  const HocComponent = ({ ...props }) => {
    const { userID, setUserID, setBlogs } = useGlobalContext();
    const router = useRouter();
    useEffect(() => {
      if (userID !== '') {
        setBlogs(blogs);
        router.push('/dashboard');
      } else {
        const id = localStorage.getItem('userID');
        if (id) {
          setUserID(id);
          setBlogs(blogs);
        } else {
          router.push('/');
        }
      }
    }, [userID, router, setUserID, setBlogs]);
    return <WrappedComponent {...props} />;
  };

  return HocComponent;
};

export default withAuthHOC;
