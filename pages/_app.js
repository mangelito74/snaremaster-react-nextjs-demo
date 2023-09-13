import RootLayout from "../components/Layout/RootLayout";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;
