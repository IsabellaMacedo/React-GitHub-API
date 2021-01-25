import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <h4>
          Seja bem vindo(a), <strong>Admin</strong>!
        </h4>
      </section>
      <section>
        <Link to="/home"> Voltar </Link>
        <Link to="/login"> LogOut </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }

  button {
    background: transparent;
    justify-content: right;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  a {
    justify-content: right;
    align-items: right;
    color: blue;
    margin-right: 2rem;
  }
`;

export default Navbar;
