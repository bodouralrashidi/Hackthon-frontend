function name({ name, icon }) {
  return (
    <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 class="icon-title mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <i className={icon}></i>
          {name}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">6000$</p>
    </div>
  );
}

export default name;
