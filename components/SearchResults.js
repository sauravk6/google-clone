import React from "react";

function SearchResults({ results }) {
  return (
    <div className="mx-auto px-3 w-full sm:px-[5%] md:px-[12%] lg:pl-40">
      <p className="text-md text-gray-600 mb-5 mt-4">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results?.items?.map((item) => (
        <div key={item.link} className="max-w-3xl mb-8">
          <div className="group">
            <a href={item?.link} className="text-sm">
              {item?.formattedUrl}
            </a>
            <br />
            <a
              href={item?.link}
              className="text-xl text-blue-800 font-medium group-hover:underline"
            >
              {item?.title}
            </a>
          </div>
          <p>{item?.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
