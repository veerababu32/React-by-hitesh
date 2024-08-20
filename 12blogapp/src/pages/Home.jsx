import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { PostCard, Container } from '../components/index';
import { useSelector } from 'react-redux';

function Home() {
  const [posts, setPosts] = useState([]);
  const userLoggedIn = useSelector((state) => state.auth.status);

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
            <h1 className='text-3xl text-black'>
            {userLoggedIn ? (
              `Hello User please add some post's to see!`
            ) : (
              'Login to Read Posts'
            )}
            </h1>
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

export default Home;
