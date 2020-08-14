import styled from 'styled-components'

export const Wrapper = styled.div`
  /* height: 200vh;
  width: 100%; */
  margin-bottom: 100vh;
  background-color: ${({ theme }) => theme.color.bg};
`

export const Banner = styled.h1`
  font-family: 'Oswald';
  font-size: 100pt;
  font-weight: 300;
  color: white;
`

export const Paragraph = styled.p`
  font-family: 'Lato';
  font-weight: 300;
  color: white;
  letter-spacing: .5px;
`

export const FrontPage = styled.div.attrs({
  className: 'row col-10 col-lg-9 offset-1 offset-lg-2'
})`
  padding-top: 10vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9;
`
