"use client";

const Blog = ({params}: any) => {
  return (
    <div>page - {JSON.stringify(params)}</div>
  )
}

export default Blog;