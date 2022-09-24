import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import userStore from "../pages/store/userStore";

function MyApp({ Component, pageProps }) {
  //fetch

  // const Currentuser = userStore.users.filter((Element) => {
  //   Element._id === userStore.CurrentUserId;
  //   console.log(Element, "element");
  // });

  // console.log([...userStore.currentUserData.cards], "current user data");

  const [user, setUser] = useState({});
  useEffect(async () => {
    await userStore.getUser(userStore.CurrentUserId);

    setUser({
      loggedIn: true,
      name: userStore.currentUserData.name,
      nthly_payout: 1500,
      wallet: 350,
      cards: [...userStore.currentUserData.cards],
    });
  }, []);
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
