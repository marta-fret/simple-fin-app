import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export interface INavigationItemProps {
  to: string;
  label: string;
  icon: ReactElement;
}

export const NavigationItem = ({ to, label, icon }: INavigationItemProps) => {
  return (
    <ListItem sx={{ '&:has(.active)': { backgroundColor: 'whitesmoke' } }}>
      <ListItemButton component={NavLink} to={to} sx={{ '&.active': { color: 'red' } }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
