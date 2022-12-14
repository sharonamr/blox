import styled from 'styled-components';
import bloxLogo from '../../assets/blox-logo.svg';
import { Menu as ComponentsMenu } from '../../generated-docs/Menu';

const StyledContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  flex-grow: 0;
  flex-shrink: 1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 100%;

  ${(props) => props.theme.breakpoints.above('sm')} {
    width: 30%;
  }

  ${(props) => props.theme.breakpoints.above('lg')} {
    width: 25%;
  }

  ${(props) => props.theme.breakpoints.above('xl')} {
    width: 20%;
  }
`;

const StyledLogo = styled.img`
  top: 0;
  width: 9rem;
`;

const StyledComponentsMenu = styled(ComponentsMenu)`
  margin: 2rem auto auto auto;
`;

export const Menu = ({ className }: { className?: string }) => {
  return (
    <StyledContainer className={className}>
      <StyledLogo src={bloxLogo} alt="blox logo" />
      <StyledComponentsMenu />
    </StyledContainer>
  );
};
