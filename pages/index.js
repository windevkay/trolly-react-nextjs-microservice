import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  const { currentUser } = data;
  return {
    props: {
      currentUser,
    }, // will be passed to the page component as props
  };
}

export default LandingPage;
