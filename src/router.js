import React from 'react';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import App from './routes/App';
import DashBoard from './routes/dashboard';
import Users from './routes/users';

const { ConnectedRouter } = routerRedux;

// function RouterConfig({ history }) {
//   return (
//     <ConnectedRouter history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage} />
//         <App>
//           <Route exact path="/app" render={() => (<Redirect to="/dashboard" />)} />
//           <Route path="/dashboard" exact component={DashBoard} />
//           <Route path="/users" exact component={Users} />
//         </App>
//       </Switch>
//     </ConnectedRouter>
//   );
// }

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <App>
          <Route exact path="/app" render={() => (<Redirect to="/dashboard" />)} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/users" exact component={Users} />
        </App>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
