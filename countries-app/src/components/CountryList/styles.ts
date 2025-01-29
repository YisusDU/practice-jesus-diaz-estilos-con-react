import styled from "styled-components";

const CountryListWrapper = styled.div``;

const CountryForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 30px;
  gap: 10px;

  input {
    width: 30%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input:hover {
    scale: 1.02;
    transition: all 0.25s;
  }
  button {
    padding: 5px 10px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.25s;
  }
  button:hover {
    background-color: #e0e0e0;
    transition: all 0.25s;
    scale: 1.1;
  }
  button:active {
    transform: scale(0.9);
    transition: all 0.25s;
  }
`;
