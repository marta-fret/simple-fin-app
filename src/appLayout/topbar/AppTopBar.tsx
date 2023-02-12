import React from 'react';
import { Avatar, Button, styled, Typography } from '@mui/material';
import { useThemeMode } from '../../theme/ThemeProvider';
import { ThemeMode } from '../../theme/types';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(8),
}));

const StyledUserInfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textTransform: 'none',
  textAlign: 'left',
  marginLeft: theme.spacing(2),
}));

interface IAppTopBarProps {
  name: string;
  email: string;
  imageUrl: string;
}

export const AppTopBar = ({ name, email, imageUrl }: IAppTopBarProps) => {
  const { setThemeMode, themeMode } = useThemeMode();

  return (
    <StyledContainer>
      <Button
        variant="outlined"
        onClick={() => {
          setThemeMode(
            themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK,
          );
        }}
      >
        <Avatar src={imageUrl} />
        <StyledUserInfoContainer>
          <Typography variant="button">{name}</Typography>
          <Typography variant="caption">{email}</Typography>
        </StyledUserInfoContainer>
      </Button>
    </StyledContainer>
  );
};
