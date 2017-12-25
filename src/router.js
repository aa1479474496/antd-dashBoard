import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MyLayout from './routes/MyLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/layout" exact component={MyLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
