import React from 'react';
import { connect } from 'dva';
import MyLayout from '../components/Layout';


const Layout = ({ children, layout, dispatch }) => {
  const { isNavbar, siderFold } = layout;
  const headerProps = {
    children,
    isNavbar,
    siderFold,
    switchSider() {
      dispatch({ type: 'layout/switchSider' });
    },
  };
  return (
    <MyLayout {...headerProps} />
  );
};

export default connect(({ layout }) => ({ layout }))(Layout)
;
