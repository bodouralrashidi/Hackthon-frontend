import React from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import LayersIcon from "@material-ui/icons/Layers";
import LockIcon from "@material-ui/icons/Lock";
import EcoIcon from "@material-ui/icons/Eco";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div id="sidebar" className="md:w-2/12 w-6/12 h-screen shadow-2xl">
      <div className=" border-b py-3 mt-1 flex justify-around ">
        <p className="text-xl  font-semibold">Bank</p>
        <p>|</p>
        <p className="text-gray-400 text-lg">Smart</p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <h1 className="text-gray-400">Menu</h1>
          <Link href="/">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <DonutLargeIcon className=" text-gray-300" />
              <p className=" ">Main Menu</p>
            </div>
          </Link>
          <Link href="/new">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <DonutLargeIcon className=" text-gray-300" />
              <p className=" ">New Card</p>
            </div>
          </Link>
          <Link href="/wishlist">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <DonutLargeIcon className=" text-gray-300" />
              <p className=" ">Wishlist</p>
            </div>
          </Link>
          <Link href="/redeem">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <DonutLargeIcon className=" text-gray-300" />
              <p className=" ">Redeem</p>
            </div>
          </Link>
          <Link href="/page2">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <DonutLargeIcon className=" text-gray-300" />
              <p className=" ">Page template</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
