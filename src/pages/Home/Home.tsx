import React, { lazy, Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = (): JSX.Element => {
  const Countries = lazy(() => import('components/Countries/Countries'))
  return (
    <Container>
      <Suspense fallback={<LoadingSpinner icon={faSpinner} />}>
        <Countries />
      </Suspense>
    </Container>
  )
}

export default Home
