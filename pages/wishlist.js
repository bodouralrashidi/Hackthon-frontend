import { useState } from "react";

function name(props) {
  const [wishList, setwishList] = useState([
    { name: "PS5", price: 200, saving: 25 },
  ]);
  const [wish, setWish] = useState({
    name: "PS5",
    price: 200,
    saving: 25,
  });

  function handleChange(ev) {
    setWish((x) => {
      return { ...x, [ev.target.name]: ev.target.value };
    });
  }

  function handleClick(ev) {
    ev.preventDefault();

    setwishList((x) => {
      return [...x, wish];
    });
  }
  return (
    <section className="p-5 flex flex-col">
      <div class="">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Product name
              </th>
              <th scope="col" class="py-3 px-6">
                Saving
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                Month
              </th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((x) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {x.name}
                  </th>
                  <td class="py-4 px-6 text-red-500">{x.saving}</td>
                  <td class="py-4 px-6 ">{x.price} KWD</td>
                  <td class="py-4 px-6 text-green-500">
                    {x.price / x.saving} Month
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <a
        href="#popup1"
        class="p-3 bg-green-400 text-white rounded-md mt-5 w-1/3 self-center text-center text-xl"
      >
        Add
      </a>
      <div id="popup1" class="popup">
        <a href="#" class="close">
          &times;
        </a>
        <h2>Fill in the blanks with your wishes</h2>

        <br></br>

        <form>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Monthly Saving
            </label>
            <input
              type="text"
              name="saving"
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <h1 className="mt-3">Time : {wish.price / wish.saving} Month</h1>
          <button
            type="submit"
            name="saving"
            id="bynckos"
            onClick={handleClick}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
          >
            Submit
          </button>
        </form>
      </div>
      <a href="#" class="close-popup"></a>
    </section>
  );
}

export default name;
