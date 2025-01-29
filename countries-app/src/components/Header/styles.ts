import styled from "styled-components";

const HeaderContent = styled.header`
  background: linear-gradient(
    90deg,
    rgba(253, 0, 0, 0.5),
    rgba(74, 211, 61, 0.5)
  );
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5em;
  height: 30px;
  margin: 20px 0;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  .link {
    color: rgb(0, 0, 0);
    text-decoration: none;
    padding: 5px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    box-sizing: border-box;
    transition: all 0.25s;
    margin: 10px;

    &:hover,
    &:active {
      scale: 1.1;
      box-sizing: border-box;
      transition: all 0.25s;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export { HeaderContent, HeaderTitle, HeaderNav };
