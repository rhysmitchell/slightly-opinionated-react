import React from 'react'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Navigation } from 'components/Navigation'
import { Container } from 'react-bootstrap'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import 'styles.css'

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <Container fluid={true} style={{ paddingLeft: '0', paddingRight: '0' }}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Container>
  </div>
)

export default App
