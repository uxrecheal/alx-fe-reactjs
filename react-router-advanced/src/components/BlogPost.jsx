import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {
    const {postId} = useParams();
  return (
    <div>
    <h1>Blog Post: {postId}</h1>
    <p>Here is the content for post {postId}...</p>
  </div>
  );
};

export default BlogPost