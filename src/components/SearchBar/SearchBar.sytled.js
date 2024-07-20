import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  input {
    height: 2.5rem;
    width: 85%;
    border: none;
    background-color: #fff;
    border-radius: 3.125rem;
    padding-left: 1rem;
    color: #000000;
  }

  button {
    height: 2.5rem;
    width: 2.5rem;
    max-width: 15%;
    background-color: #fff;
    border-radius: 3.125rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
