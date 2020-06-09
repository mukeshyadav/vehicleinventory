import React from "react";

import IcoFilter from "../../images/filter.svg";
import IcoAdd from "../../images/add.svg";

export default function Filters() {
  return (
    <div className="flex items-center justify-between border-b pb-3 mb-3">
      <h2 className="text-lg font-bold">Vehicle</h2>
      <div className="inline-flex">
        <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border border-gray-500 rounded-l">
          <img src={IcoFilter} alt="Apply Filter" className="h-5" />
        </button>
        <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-gray-500 border rounded-r">
          <img src={IcoAdd} alt="Apply Filter" className="h-5" />
        </button>
      </div>
    </div>
  );
}
