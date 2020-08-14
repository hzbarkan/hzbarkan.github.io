import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.accent};
  color: #ffffff;
  z-index: -99;
  position: fixed;
  top: 0;
  left: 0;

  & .heading {
    font-family: 'Oswald';
    font-weight: 400;
  }

  & .content {
    font-family: 'Lato';
  }

  & .bold {
    font-weight: 600;
  }
`

export const CenteredSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Ref = styled.a`
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    opacity: 0.5;
    transition: .2s;
  }

  &:visited {
    color: #ffffff;
  }
`

export const SocialRef = styled(Ref)`
  font-size: 30pt;
  margin: 0 20px;  
`
