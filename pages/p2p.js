function name(props) {
  return (
    <section className="p-5">
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  class="text-gray-900 text-gray1 dark:text-white hover:underline"
                  aria-current="page"
                ></a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-900 text-gray dark:text-white hover:underline"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 text-ray dark:text-white hover:underline"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 text-gay dark:text-white hover:underline"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Lended By
              </th>
              <th scope="col" class="py-3 px-6">
                Country
              </th>

              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                State
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hamad Alshamari
              </th>
              <td class="py-4 px-6">KW</td>

              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Waiting
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Bodour Alrashidi
              </th>
              <td class="py-4 px-6">KW</td>

              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6">
                <a
                  href="#"
                  class="font-medium text-green-600 dark:text-blue-500 hover:underline"
                >
                  Paid
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alwaleed{" "}
              </th>
              <td class="py-4 px-6">KW</td>

              <td class="py-4 px-6">$99</td>
              <td class="py-4 px-6">
                <a
                  href="#"
                  class="font-medium text-green-600 dark:text-blue-500 hover:underline"
                >
                  Paid
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default name;
