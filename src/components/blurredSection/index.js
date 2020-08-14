import React from 'react'
import styled from 'styled-components'

const Blur = styled.div`
  position: relative;
  height: 100vh;

  & .inside {
    position: relative;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    ${({ blur }) => `filter: blur(${blur ? blur : 5}px) grayscale(100%);`}
  }

  &:after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: ${({ theme, tint }) => `${tint ? theme.color[tint] : theme.color.accent}80`}
  }
`

export const BlurredSection = ({ children, ...rest }) => (
  <Blur {...rest}>
    {children}
  </Blur>
)
