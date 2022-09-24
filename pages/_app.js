import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    loggedIn: true,
    name: "Athbi Hamdi Almutairi",
    monthly_payout: 1500,
    wallet: 350,
    cards: [
      { type: "Credit Card", balance: 104.4 },
      { type: "Debit Card", balance: 2000 },
      { type: "Crypto Card", balance: 50 },
    ],
  });
  useEffect(() => {}, []);
  const router = useRouter();

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
          <Header userData={user} />
          {user.loggedIn ? (
            <Component userData={user} {...pageProps} />
          ) : (
            <div>Please login</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyApp;
