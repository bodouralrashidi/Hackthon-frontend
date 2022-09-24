import Head from "next/head";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import CardItem from "./components/CardsIcon";
import TransactionList from "./components/TransactionList";
import userStore from "./store/userStore";
export default function Home({ userData }) {
  console.log(userData.cards);
  // const cards = userStore.currentUserData.cards
  // console.log(cards)
  const myCards = userData.cards;
  return (
    <section className="p-5">
      <div className="h-full flex justify-between">
        <div className="main-side">
          <div className=" py-1 ">
            <p className="text-gray-500 text-lg">Dashboard</p>
            <p className="font-bold text-2xl transform -translate-y-2">
              Hey, {userData.name}
            </p>
          </div>
          <h2 className="text-3xl mt-5 text-gray-500 mb-1">Your Wallets</h2>
          <div className="flex space-x-3">
            {myCards.map((x) => {
              return <Card title={x.type} balance={x.balance} icon={0} />;
            })}
          </div>
          {/* <h2 className="text-4xl mt-5">Basic Stats</h2>
          <div className="space-x-4 mt-5 mb-5 flex ">
            <CardItem name="Profit" icon="fa-solid fa-money-bill" />
            <CardItem name="Profit" icon="fa-solid fa-money-bill" />
            <CardItem name="Profit" icon="fa-solid fa-money-bill" />
            <CardItem name="Profit" icon="fa-solid fa-money-bill" />
          </div> */}
        </div>
        <div className="right-side">
          <h1 className="text-3xl mt-3 mb-3">Last transactions</h1>
          <TransactionList
            data={[
              { name: "Starbucks", balance: "2.5" },
              { name: "Costa", balance: "1.5" },
              { name: "Supermarket", balance: "6.5" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
