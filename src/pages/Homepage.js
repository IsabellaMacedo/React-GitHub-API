import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/repositories"> Repositórios </Link>
    </main>
  );
};

export default Homepage;
