import styled from 'styled-components';
import githubLogo from '../../assets/github.svg';

const StyledHeader = styled.header`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: ${(props) => props.theme.palette.primary.DEFAULT};
`;

const StyledGithubLink = styled.a`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 9999px;
  border-width: 0;
  position: absolute;
  right: 0.5rem;
  display: flex;

  :hover {
    background-color: #e5e7eb;
    transform: scale(1.05, 1.05);
    transition-property: all;
  }
`;

export const Header = ({ className }: { className?: string }) => {
  return (
    <StyledHeader className={className}>
      <StyledGithubLink href="https://github.com/sharonamr/blox">
        <img src={githubLogo} alt="Github logo" />
      </StyledGithubLink>
    </StyledHeader>
  );
};
