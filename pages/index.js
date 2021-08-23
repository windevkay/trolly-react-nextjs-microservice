import axios from "axios";

const HomePage = ({ data }) => {
  const { currentUser } = data;
  return <div>Home</div>;
};

export const getServerSideProps = async (context) => {
  const response = await axios.get("/api/users/currentuser");
  return {
    props: {
      data: response.data,
    },
  };
};

export default HomePage;

// axios.get('/api/users/currentuser').catch((err) => {
//   console.log(err.message);
// });

//ingress-nginx-controller

//kubectl get services -n ingress-nginx
