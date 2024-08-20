/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { PostCard, Container } from '../components/index';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        console.log(posts);
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap justify-center">
            <h1 className='text-3xl text-black'>Hello User please add some post's to see!</h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts &&
            posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
