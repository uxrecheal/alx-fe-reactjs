// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Fetch function to get posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using useQuery hook to fetch data with various options
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', // Query key
    fetchPosts, // Fetch function
    {
      cacheTime: 1000 * 60 * 5, // Data will be cached for 5 minutes
      staleTime: 1000 * 60, // Data will be considered fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch data when the window regains focus
      keepPreviousData: true, // Keep previous data when new data is being fetched
    }
  );

  // Render UI based on loading, error, and success states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button> {/* Button to trigger refetch */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
