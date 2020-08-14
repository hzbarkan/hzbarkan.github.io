import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Section = styled.div`
  opacity: ${({ visible }) => visible ? 1 : 0};
  transform: translateY(20vh);
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
`

export const ScrollSection = ({ children }) => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <Section visible={isVisible} ref={domRef}>
      {children}
    </Section>
  )
}
