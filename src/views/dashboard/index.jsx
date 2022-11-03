import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

import { Routes as routes } from "../../routes";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const DasboardBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
`;

const Content = styled.div`
  background-color: white;
  color: black;
  flex: 1;
  box-sizing: border-box;
  padding: 1rem;
`;

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);

  return (
    <DashboardContainer>
      <NavBar
        toggleMenu={() => setShowSidebar(!showSidebar)}
        title="Panel del administrador"
      />
      <DasboardBody>
        <Sidebar show={showSidebar} />
        <Content>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              {routes.map((item, idx) => {
                return (
                  <Route
                    key={`Content-${idx}`}
                    path={item.path}
                    element={<item.element />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </Content>
      </DasboardBody>
    </DashboardContainer>
  );
};

export default Dashboard;
