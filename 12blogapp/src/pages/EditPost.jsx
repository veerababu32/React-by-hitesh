import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { Container, PostForm } from '../components/index';

export default function EditPost() {
  const [post, setPost] = useState();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate('/');
        }
      });
    }
  }, [slug, navigate]);

  return (
    <div className="py-6">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}
