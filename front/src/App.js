import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Resume, Registration } from './pages';
import { PageContainer } from './components';
import { useSpring, animated } from 'react-spring';

function App() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: 'rotateY(70deg)' },
    to: { opacity: 1, transform: 'rotateY(0deg)' },
    config: { delay: 1000, duration: 800 },
  });
  return (
    <Router>
      <Switch>
        <animated.div style={props}>
          <PageContainer>
            <Route exact path="/" component={Resume} />
            <Route exact path="/auth/registration" component={Registration} />
          </PageContainer>
        </animated.div>
      </Switch>
    </Router>
  );
}

export default App;
