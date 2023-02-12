import React from 'react';
import styled from '@emotion/styled';

import { Drawer, Typography } from '@mui/material';
import List from '@mui/material/List';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

import Logo from '../../../public/assets/logo.svg';
import { ROUTES } from '../../routes';
import { SIDEBAR_WIDTH } from '../constants';
import { NavigationItem } from './NavigationItem';

const paddingLeft = 32;

const StyledLogoContainer = styled.div`
  padding-left: ${paddingLeft}px;
`;

const StyledHeader = styled(Typography)`
  padding-left: ${paddingLeft}px;
` as typeof Typography;

export const AppSidebar = () => {
  return (
    <Drawer
      hideBackdrop
      variant="permanent"
      open
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDEBAR_WIDTH },
      }}
    >
      <StyledLogoContainer>
        <Logo viewBox={`0 0 256 134`} width="50%" />
      </StyledLogoContainer>
      <StyledHeader component="h6" variant="h6">
        Zarządzanie
      </StyledHeader>
      <List>
        <NavigationItem key="users" to={ROUTES.users} label="Użytkownicy" icon={<PeopleAltOutlinedIcon />} />
        <NavigationItem key="currencies" to={ROUTES.currencies} label="Waluty" icon={<PaidOutlinedIcon />} />
        <NavigationItem key="balance" to={ROUTES.balance} label="Salda" icon={<FolderOutlinedIcon />} />
      </List>
    </Drawer>
  );
};
