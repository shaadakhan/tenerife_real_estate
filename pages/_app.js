import "../styles/globals.css";
import Layout from "../components/Layout";
import NextProgress from "next-progress";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress
        color="#000"
        height={12}
        delay={300}
        options={{ showSpinner: false }}
      />
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
