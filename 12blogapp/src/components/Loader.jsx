import { Circles } from 'react-loader-spinner';

function Loader() {
  return (
    <>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        visible={true}
      />
    </>
  );
}

export default Loader;
