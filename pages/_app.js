import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Smat Banking</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="w-screen ">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
