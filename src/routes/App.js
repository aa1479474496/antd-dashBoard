import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import cs from 'classnames';
import { Layout } from '../components';

const { Header, Sider, styles } = Layout;

const App = ({ children, layout, dispatch }) => {
  const { isNavbar, siderFold } = layout;
  const headerProps = {
    children,
    isNavbar,
    siderFold,
    switchSider() {
      dispatch({ type: 'layout/switchSider' });
    },
  };
  const siderProps = {
    siderFold,
  };
  return (
    <div>
      {!isNavbar
        ? <Sider {...siderProps} />
        : ''
      }
      <div
        className={cs(styles.main,
            { [styles.fold]: isNavbar ? false : siderFold },
            { [styles.withnavbar]: isNavbar })}
      >
        <Header {...headerProps} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(({ layout }) => ({ layout }))(App));

