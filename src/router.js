import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MyLayout from './routes/MyLayout';
import Test from './components/TestLink';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <MyLayout>
          <Route path="/test" exact component={Test} />
        </MyLayout>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
