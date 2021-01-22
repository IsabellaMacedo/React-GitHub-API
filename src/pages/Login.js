import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import loginimg from "../images/login-img.svg";

function initialState() {
  return { user: "", password: "" };
}

function login({ user, password }) {
  if (user === "admin" && password === "password") {
    return { token: "1234" };
  }
  return { error: "Usuário/senha incorretos." };
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(GithubContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      return history.push("/home");
    }
    setError(error);
    setValues(initialState);
    return history.push("/");
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="user-login">
          <h3 className="user-login__title">Busca - API GitHub</h3>
          <form onSubmit={onSubmit}>
            <div className="user-login__form-control">
              <img src={loginimg} className="App-logo" alt="logo" />
              <label htmlFor="user">Usuário </label>
              <input
                id="user"
                type="text"
                name="user"
                onChange={onChange}
                value={values.user}
              />
            </div>
            <div className="user-login__form-control">
              <label htmlFor="password">Senha </label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
              />
            </div>
            {error && <div className="user-login__error">{error}</div>}

            <button
              type="submit"
              theme="contained-green"
              className="user-login__submit-button"
              rounded
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  .user-login {
    width: 400px;
    margin: 0 auto;
  }

  .user-login__title {
    font-size: 40px;
    color: #0abde3;
    margin-bottom: 50px;
    text-align: center;
  }

  .user-login__form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .user-login__form-control label {
    margin-bottom: 5px;
    color: #979797;
    font-size: 16px;
  }

  .user-login__form-control input {
    border-radius: 4px;
    border: 1px solid #bbbbbb;
    height: 36px;
    padding: 5px 10px;
  }

  .user-login__form-control input:focus {
    outline: 0;
    border-color: #5988df;
  }

  button {
    border-radius: 5px;
    border-color: transparent;
    padding: 0.5rem 0.5rem;
    text-transform: capitalize;
    font-size: 16px;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
    }
  }
`;

export default Login;
