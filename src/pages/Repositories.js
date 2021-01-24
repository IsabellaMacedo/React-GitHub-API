import React from "react";
import { Link } from "react-router-dom";
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
      <div>
        <Link to="/home"> Voltar </Link>
      </div>
      <Repos />
    </main>
  );
};

export default Repositories;
