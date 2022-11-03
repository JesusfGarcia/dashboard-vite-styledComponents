import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.header`
  background-color: #670c98;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  gap: 2rem;
`;

const Icon = styled.span`
  cursor: pointer;
`;

const NavBar = ({ title, toggleMenu }) => {
  return (
    <StyledNavBar>
      <Icon onClick={toggleMenu} className="material-symbols-outlined">
        menu
      </Icon>
      <h4>{title}</h4>
    </StyledNavBar>
  );
};

export default NavBar;
