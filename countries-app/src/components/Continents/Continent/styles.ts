import styled from "styled-components";

interface ListItemProps {
  order: number;
}

interface RegionProps {
  region: string;
}

const ContinentList = styled.div <RegionProps>`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 15px;
  background-color: ${(props) =>{
    if (props.region === "Africa") return "#ffcc0073";
    if (props.region === "Americas") return "#ff993394";
    if (props.region === "Asia") return "#ff9933fc";
    if (props.region === "Europe") return "#99ccff";
    if (props.region === "Oceania") return "#98cba9";
    return "#f0f0f0";
  }};

  h2 {
    text-align: left;
    font-size: 30px;
    display: inline;
    width: 120px;
    margin: 20px 10px;
  }

  button {
    width: 20px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
      transition: all 0.3s ease;
      scale: 0.95;
    }
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  
`;

const ListItem = styled.li <ListItemProps>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  height: auto;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 500;
  transition: all 0.2s ease;
  background-color: ${(props) => {
    const order = props.order ?? 0;
    if (order % 2 === 0) return "#b9b9b9";
    return "#f0f0f0";
  }};

  &:hover {
    background-color:rgb(179, 179, 179);
    scale: 1.005;
    transition: all 0.2s ease;
  }

  span {
    font-weight: bold;
    color: #333;
  }

  .dark {
    background-color: #b9b9b9; /* White */
    color: #333333; /* Dark Gray */
  }

  .light {
    background-color: #ffffff; /* Dark Blue */
    color: #000000; /* Light Gray */
  }
`;

export { ContinentList, UnorderedList, ListItem };
