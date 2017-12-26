import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import App from './routes/App';
import DashBoard from './routes/dashboard';
// import Test from './components/TestLink';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <App>
          <Route path="/dashboard" exact component={DashBoard} />
        </App>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
