import { useRouter } from "next/router";
import React, { useRef } from "react";
import Image from "next/image";
import { XIcon, MicrophoneIcon } from "@heroicons/react/solid";
import HeaderOptions from "./HeaderOptions";

function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const searchText = searchInputRef.current.value;
    if (!searchText) return;
    router.push(`/search?query=${searchText}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      {/* Header */}
      <div className="w-full flex items-center justify-start p-6">
        <Image
          src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={92}
          height={30}
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <form className="flex flex-col items-center flex-grow ml-6 max-w-3xl mr-6">
          <div className="flex border border-gray-200 w-full p-2 rounded-full hover:shadow-lg focus-within:shadow-lg px-5 py-3 items-center ">
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow focus:outline-none"
            />
            <XIcon className="h-5 text-gray-500 cursor-pointer hover:scale-110" />
            <MicrophoneIcon className="h-5 text-blue-500 ml-2 pl-2 border-l cursor-pointer hidden sm:inline-flex" />
          </div>
          <button hidden type="submit" onClick={search} />
        </form>
        <img
          loading="lazy"
          src="https://lh3.googleusercontent.com/ogw/ADea4I5b16leucXkeaGU6eWRUcFZdeiRUYBFUr3gYROBRA=s64-c-mo"
          className="rounded-full h-10 cursor-pointer transition duration-150 hover:scale-110 ml-auto"
        />
      </div>
      {/* Haeder Options */}
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
