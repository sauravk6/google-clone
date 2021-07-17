import React from "react";

function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center border-b-4 pb-2 border-transparent cursor-pointer hover:border-blue-500 ${
        selected && "border-blue-500 text-blue-500"
      }`}
    >
      <Icon className="h-4 mr-2" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
