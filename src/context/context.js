import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockModal from "./mockData.js/mockModal";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const reqUrl = "https://api.github.com/rate_limit";
const searchUrl = "https://api.github.com/users/";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [details, setDetails] = useState(mockModal);
  const [followers, setFollowers] = useState(mockFollowers);

  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  // search
  const searchGithubUser = async (user) => {
    // limpa o erro de pesquisa anterior, se tiver, já que o default é false.
    toggleError();
    setIsLoading(true);
    const response = await axios(`${searchUrl}${user}`).catch((err) =>
      console.log(err)
    );

    if (response) {
      // Usuário
      setGithubUser(response.data);
      const { login, followers_url, repos_url } = response.data;

      // Repositórios
      axios(`${repos_url}`).then((response) => setRepos(response.data));

      // Seguidores
      axios(`${followers_url}`).then((response) => setFollowers(response.data));
    } else {
      // se não achar o usuário
      toggleError(true, "Usuário não encontrado.");
    }
    checkRequests();
    setIsLoading(false);
  };

  // requests
  const checkRequests = () => {
    axios(reqUrl)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(
            true,
            "Você atingiu o limite de 60 requisições/hora, aguarde 1 hora."
          );
        }
      })
      .catch((err) => console.log(err));
  };

  // error
  function toggleError(show, msg) {
    setError({ show, msg });
  }

  //useEffect
  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        details,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
