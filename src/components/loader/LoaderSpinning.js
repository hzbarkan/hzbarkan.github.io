import React from 'react'
import { Svg } from './styles'

const LoaderSpinning = ({ size, color, width }) => {
  return (
    <Svg viewBox={`0 0 ${size} ${size}`} color={color}>
      <circle
        className='circle'
        cx={size ? size / 2 : 25}
        cy={size ? size / 2 : 25}
        fill='none'
        strokeWidth={width ? width : 4}
        r={size ? (Math.floor(size / 10) * 10) : 20}
      />
    </Svg>
  )
}

export default LoaderSpinning
