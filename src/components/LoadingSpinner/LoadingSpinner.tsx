import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

interface ILoadingSpinnerProps {
  icon: IconDefinition
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = (
  props: ILoadingSpinnerProps
): JSX.Element => {
  const Spinner = styled(FontAwesomeIcon)`
    text-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  `

  const { icon } = props

  return <Spinner icon={icon} spin size="6x" />
}

export default LoadingSpinner
