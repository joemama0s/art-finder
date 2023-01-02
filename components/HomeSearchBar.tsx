import React, { useState } from "react";

function HomeSearchBar() {
  // Search bar logic goes here
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(["Art", "Controllers", "Wallets"]);

  const handleChange = (event: { target: { value: any } }) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="relative w-full text-gray-600 rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
      </div>
      <input
        className="block w-full h-16 pl-10 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
        placeholder="Search"
        type="search"
        value={value}
        onChange={handleChange}
      />
      {value.length > 0 && (
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-xs">
          {options.map((option) => (
            <div
              key={option}
              className="py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={() => setValue(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeSearchBar;
