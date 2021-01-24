import React, { useEffect, useState, useRef } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Repos = () => {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };
  const { repos } = React.useContext(GithubContext);
  return (
    <Wrapper className="section-center">
      <div className="repos">
        {repos.map((repos, index) => {
          const { name, description, forks, language, html_url } = repos;

          return (
            <article key={index}>
              <div>
                <a href={html_url} target="_blank">
                  <h4>Nome: {name}</h4>
                  <h4>Descrição: {description}</h4>
                  <h4>Forks: {forks}</h4>
                </a>
              </div>
            </article>
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
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    margin-top: 3rem;
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
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
      color: var(--black);
    }
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .modal-box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 30%;
    width: 60%;
    overflow-y: auto;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    z-index: 101;
    padding: 40px;
  }
`;

export default Repos;
