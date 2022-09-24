import Head from "next/head";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import CardItem from "./components/CardsIcon";

export default function Home() {
  return (
    <section className="p-5">
      <div className="h-full ">
        <div className=" py-1 ">
          <p className="text-gray-500 text-lg">Dashboard</p>
          <p className="font-bold text-2xl transform -translate-y-2">Hey</p>
        </div>
        <h2 className="text-4xl">Your Wallets</h2>
        <div className="flex space-x-3">
          <Card title="TOTAL" balance={409.079} icon={0} />
          <Card title="AVAILABLE" balance={300.079} icon={1} />
          <Card title="CLAIMABLE REWARD" balance={100.079} icon={2} />
          <Card title="DELEGATED" balance={339.079} icon={3} />
        </div>
        <h2 className="text-4xl mt-5">Basic Stats</h2>
        <div className="space-x-4 mt-5 mb-5 flex ">
          <CardItem name="Profit" icon="fa-solid fa-money-bill" />
          <CardItem name="Profit" icon="fa-solid fa-money-bill" />
          <CardItem name="Profit" icon="fa-solid fa-money-bill" />
          <CardItem name="Profit" icon="fa-solid fa-money-bill" />
        </div>
      </div>
    </section>
  );
}
