import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "../../routes";

const StyledSideBar = styled.aside`
  background-color: #885e9ed0;
  width: 11rem;
  position: absolute;
  height: 100%;
  left: ${(props) => (props.show ? "-11rem" : 0)};
  transition: 0.5s ease all;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: bold;
`;

const SidebarItem = styled.div`
  padding: 5px;
  box-sizing: border-box;
  :hover {
    background-color: #885e9e;
    cursor: pointer;
  }
`;

const Sidebar = ({ show = true }) => {
  const navigate = useNavigate();
  return (
    <StyledSideBar show={show}>
      {Routes.map((route, idx) => {
        return (
          <SidebarItem key={`item-${idx}`} onClick={() => navigate(route.path)}>
            {route.label}
          </SidebarItem>
        );
      })}
    </StyledSideBar>
  );
};

export default Sidebar;
