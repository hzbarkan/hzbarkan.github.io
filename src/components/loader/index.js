import React from 'react'
import LoaderGrowing from './LoaderGrowing'
import LoaderSpinning from './LoaderSpinning'
import { FullScreen, Container } from './styles'

const FullscreenLoaderInit = () => {
  return (
    <FullScreen>
      <Container>
        <LoaderSpinning />
        <LoaderGrowing />
        <LoaderSpinning color='secondary' />
        <LoaderGrowing />
      </Container>
    </FullScreen>
  )
}

export default {
  FullscreenLoaderInit,
  LoaderGrowing,
  LoaderSpinning
}
