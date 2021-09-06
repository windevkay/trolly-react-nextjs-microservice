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
  // for other pages that may contain getinitialprops - unlikely
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  // spread data to pass currentUser
  return { pageProps, ...data };
};

export default AppComponent;
