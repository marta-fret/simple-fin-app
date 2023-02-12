import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export interface INavigationItemProps {
  to: string;
  label: string;
  icon: ReactElement;
}

export const NavigationItem = ({ to, label, icon }: INavigationItemProps) => {
  return (
    <ListItem
      sx={(theme) => ({
        '&:has(.active)': { backgroundColor: theme.palette.primary.main },
      })}
    >
      <ListItemButton
        component={NavLink}
        to={to}
        sx={(theme) => ({
          '&.active': { color: theme.palette.primary.contrastText },
        })}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
