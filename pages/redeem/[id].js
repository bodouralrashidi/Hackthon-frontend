import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

function login(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(async (x) => {
    await axios
      .post("http://192.168.1.123:4030/card/632ef36c27690e4d48cd16c3/redeem", {
        headers: {
          _id: "632edb56d8c3d0ba519db678",
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: "",
          mode: "cors",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <section>
      <div class="cardPageContainer">
        <h1 class=" flex flex-col items-center justify-center mb-6 text-4xl font-extrabold tracking-tight leading-none text-blue-900 md:text-5xl lg:text-6xl dark:text-white">
          Card
        </h1>
        <h1 class=" flex flex-col items-center justify-center  text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          To redeem a gift card. Just scan the card through the top of you
          mobile
        </h1>

        <h1 class="   cardBalance flex flex-col items-center justify-center  text-4xl font-normal tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-400">
          10 KD
        </h1>

        <div class="card-page ">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Card Number
          </label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            required
          ></input>
          <div class="redeemDiv">
            <button
              type="button"
              class=" redeemButt loginbutt text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default login;
