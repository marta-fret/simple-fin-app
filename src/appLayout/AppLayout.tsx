import React from 'react';
import { Outlet } from 'react-router-dom';

import avatarImage from '../../public/assets/avatar.png';
import { AppSidebar } from './sidebar/AppSidebar';
import { AppTopBar } from './topbar/AppTopBar';
import { SIDEBAR_WIDTH } from './constants';
import { styled } from '@mui/material';

const StyledLayoutContainer = styled('div')({ display: 'flex' });

const StyledMainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(8),
  height: '100vh',
  width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
  marginLeft: SIDEBAR_WIDTH,
}));

export const AppLayout: React.FC = () => {
  return (
    <StyledLayoutContainer>
      <AppSidebar />
      <StyledMainContainer>
        <AppTopBar
          name="Jan Kowalski"
          email="j.kowalski@gmail.com"
          imageUrl={avatarImage}
        />
        <Outlet />
      </StyledMainContainer>
    </StyledLayoutContainer>
  );
};
