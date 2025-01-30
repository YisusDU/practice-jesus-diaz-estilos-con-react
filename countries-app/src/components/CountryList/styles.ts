import styled from "styled-components";

//Form and input styles
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

    &:hover {
      scale: 1.02;
      transition: all 0.25s;
    }
  }

  button {
    padding: 5px 10px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      background-color: #e0e0e0;
      transition: all 0.25s;
      scale: 1.1;
    }
    &:active {
      transform: scale(0.9);
      transition: all 0.25s;
    }
  }
`;

//PillowCards styles

const RenderCountriesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-area: auto;
`;

//Card styles
const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.25s;
  background-color: rgba(255, 246, 235, 0.438);
  transition: all 0.25s;

  &:hover {
    scale: 1.1;
    transition: all 0.25s;
  }

  h2 {
    display: flex;
    flex-wrap: nowrap;
    font-size: 1.3rem;
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #000;
  }
`;

//Loading and error styles
const LoadingOrError = styled.div`
  font-size: 50px;
  text-align: center;
  background-color: rgba(204, 204, 204, 0.8);
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);

  h2 {
    color: #000; 
  }
`;

export { 
  CountryForm,
  RenderCountriesWrapper,
  CountryCard,
  LoadingOrError
};