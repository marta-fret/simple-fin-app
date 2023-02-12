import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Button, Typography } from '@mui/material';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: none;
  text-align: left;
  margin-left: 8px;
`;

interface IAppTopBarProps {
  name: string;
  email: string;
  imageUrl: string;
}

export const AppTopBar = ({ name, email, imageUrl }: IAppTopBarProps) => {
  return (
    <StyledContainer>
      <Button variant="outlined">
        <Avatar src={imageUrl} />
        <StyledUserInfoContainer>
          <Typography variant="button">{name}</Typography>
          <Typography variant="caption">{email}</Typography>
        </StyledUserInfoContainer>
      </Button>
    </StyledContainer>
  );
};
