import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledButton = styled.button`
  margin-top: 0.25rem;
  width: 100%;
  text-align: start;
  color: rgb(40 49 115/1);
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  & > a {
    transition: color 150ms linear;
    cursor: pointer;
    text-decoration: none;
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #ffffff;
    transition-property: all;
    font-weight: 500;
    border-radius: 9999px;
    border-width: 0;
    color: rgb(40 49 115);
    outline: 0;

    :hover {
      background-color: #f3f4f6;
    }
  }

  & > .active {
    background-color: #e5e7eb;
    font-weight: 500;
  }
`;

export const MenuButton = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};
