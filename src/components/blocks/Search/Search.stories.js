/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import Search from "blocks/Search";

export default {
  title: "Data Entry/Search",
  component: Search,
  parameters: {
    docs: { page: null },
  },
  includeStories: [],
};

export const Interaction = () => {
  const results = [
    {
      title: "White House",
      description: "123 Malibu Drive, CA 92660",
    },
    {
      title: "Orange House",
      description: "1224 Malibu Drive, CA 92660",
    },
  ];
  const [stateResults, setResultsState] = useState(false);
  const toggleResults = () => { setResultsState(!stateResults); };
  return (
    <Search
      id="Interaction"
      placeholder="Search Location"
      results={stateResults ? results : null}
      onSearch={toggleResults}
    />
  );
};
Interaction.story = {
  parameters: {
    parameters: {
      viewMode: "story",
    },
  },
};
