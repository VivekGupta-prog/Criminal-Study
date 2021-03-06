import React, { useState } from "react";
import circle from "../Images/circle.png";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 4vh;
  width: 9em;
`;

const DropDownContainer = styled("div")`
  width: 9em;
  margin: auto auto auto 0;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.1rem;
  color: #1a2e61;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-top: 5px;
  background: #ffffff;
  border: 1px solid #1a2e61;
  box-sizing: border-box;
  color: #1a2e61;
  font-size: 1rem;
  font-weight: 200;
  &:first-child {
    padding-top: 0.2em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.3em;
`;

const options = ["Public", "Admin"];

function DropDownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    localStorage.setItem('userValue', value);
    props.history.push({
      pathname: '/login',
      state: {fromDashboard: true}
  });
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "User"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
function OpeningPage(props) {
    return(
        <div>
                 <nav className="opening-nav">
                 <DropDownMenu history = {props.history}/>
          </nav>
        <div className="open-container">
        <img className="circle-image" src={circle} alt="Image"/>
        </div>
        <div className="opening-heading-box">
            <h1 className="opening-heading">CRIMINAL ACTIVITIES TRACKER And THREATS ACCESS</h1>
        </div>
        </div>
    )
}

export default OpeningPage;