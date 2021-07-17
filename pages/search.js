import React from "react";
import Image from "next/image";
import Head from "next/head";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import SearchHeader from "../components/SearchHeader";
import { API_KEY, CONTEXT_KEY } from "../key";
import DummyResponse from "../dummyResponse.json";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  console.log("result = ", DummyResponse);
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      {/* Header */}
      <SearchHeader />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const shouldUseDummyData = false;
  let results;
  if (shouldUseDummyData) {
    results = DummyResponse;
  } else {
    console.log(
      "saurav url = ",
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.query}`
    );
    results = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.query}`
    ).then((res) => res.json());
    console.log("saurav results = ", results);
  }
  return {
    props: {
      results,
    },
  };
}
