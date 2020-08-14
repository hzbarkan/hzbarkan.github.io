import styled from 'styled-components'

export const SvgInit = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``

export const Svg = styled(SvgInit)`
  width: ${({ size }) => size ? size : '50px'}; 
  height: ${({ size }) => size ? size : '50px'};
  -webkit-animation: rotation 1.35s linear infinite;
  animation: rotation 1.35s linear infinite;
  stroke: ${({ theme, color }) => color ? theme.color[color] : theme.color.accent};

  & .circle {
    stroke-dasharray: 135;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-animation: turn 1.35s ease-in-out infinite;
    animation: turn 1.35s ease-in-out infinite;
  }

  @-webkit-keyframes rotation
  {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }

  @keyframes rotation
  {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }

  @-webkit-keyframes turn
  {
    0% {
      stroke-dashoffset: 180;
    }

    50% {
      stroke-dashoffset: 45;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: 180;
      -webkit-transform: rotate(450deg);
      transform: rotate(450deg);
    }
  }

  @keyframes turn
  {
    0% {
      stroke-dashoffset: 180;
    }

    50% {
      stroke-dashoffset: 45;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: 180;
      -webkit-transform: rotate(450deg);
      transform: rotate(450deg);
    }
  }
`

export const Grow = styled.div`
  & .spinner-grow {
    background-color: ${({ theme, color }) => color ? theme.color[color] : theme.color.accent} !important;
  }
`

export const FullScreen = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bg};
`

export const Container = styled.div`
  width: 20vw;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`
