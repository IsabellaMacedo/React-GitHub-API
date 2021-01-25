import React from "react";
import { Repos, Navbar } from "../components";
import { GithubContext } from "../context/context";

const Repositories = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
      </main>
    );
  }

  return (
    <main>
      <Navbar></Navbar>
      <Repos></Repos>
    </main>
  );
};

export default Repositories;
