import axios from 'axios';

const Home = () => {
  return <div>index</div>;
};

export const getsServerSideProps = async (params: string[]) => {
  const response = await axios.get(`http://localhost:3000/api/post`);
};
export default Home;
