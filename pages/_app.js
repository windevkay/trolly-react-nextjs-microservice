import App from "next/app";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/header";

import buildClient from "../api/build-client";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  // for other pages that contain getinitialprops
  const pageProps = await App.getInitialProps(appContext.ctx);

  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  // spread data to pass currentUser
  return { pageProps, ...data };
};

export default AppComponent;
