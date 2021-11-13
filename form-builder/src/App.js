import { Route, Switch, Redirect, Router } from 'react-router-dom'
import layoutRoutes from './Routes/index'
import { Container, Row, Col } from 'reactstrap';
import { createBrowserHistory } from "history";


function App() {

  const history = createBrowserHistory();
  return (

   <Container fluid data-test="component-app">
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
            <Router history={history}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/forms" />}
                />
                {layoutRoutes.map((prop, key) => {
                  return (
                    <Route
                      exact
                      path={prop.path}
                      component={prop.component}
                      key={key}
                      history={history}
                    />
                  );
                })}
              </Switch>
            </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
