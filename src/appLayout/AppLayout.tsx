import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

import avatarImage from '../../public/assets/avatar.png';
import { AppSidebar } from './sidebar/AppSidebar';
import { AppTopBar } from './topbar/AppTopBar';
import { SIDEBAR_WIDTH } from './constants';

const StyledLayoutContainer = styled.div`
  display: flex;
`;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
  width: calc(100% - ${SIDEBAR_WIDTH}px);
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const AppLayout: React.FC = () => {
  return (
    <StyledLayoutContainer>
      <AppSidebar />
      <StyledMainContainer>
        <AppTopBar name="Jan Kowalski" email="j.kowalski@gmail.com" imageUrl={avatarImage} />
        <Outlet />
      </StyledMainContainer>
    </StyledLayoutContainer>
  );
};
