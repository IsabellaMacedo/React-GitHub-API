import React from "react";

import { Info, User, Search, Navbar } from "../components";
import { GithubContext } from "../context/context";

const Homepage = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
      </main>
    );
  }

  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
    </main>
  );
};

export default Homepage;
