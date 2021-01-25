import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  return (
    <Wrapper className="section-center">
      <div className="repos">
        {repos.map((repos, index) => {
          const { name, description, forks, language, html_url } = repos;

          return (
            <main>
              <article key={index}>
                <div>
                  <h4>{name}</h4>
                  <div>
                    <h5> Descrição: {description}</h5>
                    <h5> Quantidade de Forks: {forks}</h5>
                    <h5> Linguagem utilizada: {language}</h5>
                    <h5>
                      Link para o repositório:{" "}
                      <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {html_url}
                      </a>
                    </h5>
                  </div>
                </div>
              </article>
            </main>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "Lista de Repositórios";
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }

  .repos {
    overflow: auto;
    height: 600px;
    display: grid;
    grid-template-rows: repeat(minmax(100px, 1fr));
    margin-top: 1rem;
    gap: 1rem 1rem;
    padding: 2rem 2rem;
  }

  .button {
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  }

  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    h4 {
      margin-bottom: 0.2;
      color: var(--clr-primary-5);
    }
    h5 {
      margin-bottom: 0.2;
    }
    a {
      color: gray;
    }
    div {
      grid-template-columns: auto 1fr;
      column-gap: 1rem;
    }
  }
`;

export default Repos;
