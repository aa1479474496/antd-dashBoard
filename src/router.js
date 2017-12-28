import React from 'react';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import App from './routes/App';
import DashBoard from './routes/dashboard';
import Users from './routes/users';
import error from './routes/error';

const { ConnectedRouter } = routerRedux;


function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <App>
          <Switch>
            <Route exact path="/app" render={() => (<Redirect to="/dashboard" />)} />
            <Route path="/dashboard" exact component={DashBoard} />
            <Route path="/users" exact component={Users} />
            <Route component={error} />
          </Switch>

        </App>
      </Switch>
    </ConnectedRouter>
  );
}

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage} />
//       </Switch>
//     </Router>
//   );
// }

export default RouterConfig;

// export default RouterConfig;
