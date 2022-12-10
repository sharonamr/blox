import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const StyledContainer = styled.div`
  padding: 1rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: #f3f4f6;
  border-style: solid;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const StyledButton = styled(Button)`
  margin-top: 1.5rem;
`;

const StyledContent = styled.div`
  padding-top: 0.5rem;
`;

const StyledTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const Card: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{children}</StyledContent>
      <div>
        <StyledButton>Done</StyledButton>
      </div>
    </StyledContainer>
  );
};
