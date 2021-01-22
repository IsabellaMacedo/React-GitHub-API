import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
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
      <Repos />
    </main>
  );
};

export default Homepage;
