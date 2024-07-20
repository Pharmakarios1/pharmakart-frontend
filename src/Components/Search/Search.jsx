import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Search = ({ width }) => {
  const [value, SetValue] = useState("");
  const [submit, SetSubmit] = useState(false);
  const handleSearch = (e) => {
    SetValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    SetSubmit(true);
  };
  return (
    <>
      <div
        className={`hidden sm:flex border bottom-2 items-center w-full justify-between h-10 rounded-xl text-white mr-4 ${width}`}
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search here!"
          className="w-[90%] outline-none py-1 px-2 mx-1 bg-transparent rounded-lg"
          value={value}
          onChange={handleSearch}
        />
        <CiSearch
          className="text-white font-semibold text-3xl pr-1 cursor-pointer"
          onClick={handleSubmit}
          submit={submit}
        />
      </div>
    </>
  );
};

export default Search;
