import Layout from "@/components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useEffect } from "react";
import "../public/vendor/font-awesome/css/all.min.css";
import "../public/vendor/glyphter/css/golftio.css";

// slick css
import "slick-carousel/slick/slick.css";

//main css
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>Antrenor Catalin Bordei | Club sportiv de inot</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Antrenor Catalin Bordei | Club sportiv de inot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
