import { useRadioGroup } from "@material-ui/core";
import { useState } from "react";
import Card from "./components/CardNFV";
import toast, { Toaster } from "react-hot-toast";
import cardStore from "../pages/store/cardStore";

function name(props) {
  const [cardData, setCardData] = useState({
    type: "Limted Card",
    balance: 0,
  });
  let cardElement;

  function handleChange(ev) {
    const tag = ev.target.type;
    console.log(tag);

    if (tag == "select-one") {
      setCardData((x) => {
        return { ...x, type: ev.target.value };
      });
    } else {
      setCardData((x) => {
        return { ...x, [ev.target.name]: ev.target.value };
      });
    }
  }

  function handleClick(ev) {
    ev.preventDefault();

    if (props.userData.wallet >= cardData.balance && cardData.balance != "") {
      //fetch
      toast.success("Your card is ready!");
      cardStore.createCard(cardData, "632edb56d8c3d0ba519db678");
      setCardData(cardStore.cards);
    } else {
      //fetch
      toast.error("You Can't!");
    }
  }

  cardElement = (
    <Card title={cardData.type} balance={cardData.balance} icon={0} />
  );

  return (
    <section className="p-5">
      <div className="flex justify-center items-center flex-col">
        {cardElement}
        <form
          onChange={handleChange}
          className="w-1/2 border-2 border-gray-200 p-5 mt-4 rounded-md"
        >
          <h1 className="text-4xl">Create a new card</h1>

          <div class="mb-6">
            <label
              for="balance"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Value
            </label>
            <input
              id="balance"
              name="balance"
              type="number"
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the value (KWD)
            "
              required
            />
          </div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Limted Card" selected>
              Limted Card
            </option>
            <option value="Burner Card">Burner Card</option>
          </select>

          <button
            onClick={handleClick}
            type="submit"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
}

export default name;
