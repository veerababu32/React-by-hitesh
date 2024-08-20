import Blog from '../assets/blogImg.png';

// eslint-disable-next-line react/prop-types
function Logo({ width = '100%' }) {
  return <img src={Blog} style={{ width }} alt="Logo" />;
}

export default Logo;
