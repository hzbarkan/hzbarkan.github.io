import React from 'react'
import { Grow } from './styles'

const LoaderGrowing = ({ color }) => (
  <Grow className='spinner-grow text-danger' color={color} />
)

export default LoaderGrowing
