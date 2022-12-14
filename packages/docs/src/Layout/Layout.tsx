import styled from 'styled-components';
import { Header } from './Header';
import { Menu } from './Menu';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100vh;

  ${(props) => props.theme.breakpoints.above('sm')} {
    flex-direction: row;
    overflow: hidden;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

const StyledPageContent = styled.div`
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;

  ${(props) => props.theme.breakpoints.above('sm')} {
    overflow: auto;
  }

  ${(props) => props.theme.breakpoints.above('lg')} {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  ${(props) => props.theme.breakpoints.above('xl')} {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  ${(props) => props.theme.breakpoints.above('xl')} {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  ${(props) => props.theme.breakpoints.above('2xl')} {
    padding-left: 12rem;
    padding-right: 12rem;
  }
`;

export const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <Menu />
      <StyledMain role="main">
        <Header />
        <StyledPageContent>{children}</StyledPageContent>
      </StyledMain>
    </StyledContainer>
  );
};
