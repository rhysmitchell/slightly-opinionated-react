import React from 'react'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Navigation } from 'components/Navigation'
import { Container } from 'react-bootstrap'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import 'styles.css'

const BorderlessContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
`

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <BorderlessContainer fluid={true}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </BorderlessContainer>
  </div>
)

export default App
