import React from 'react';
import { connect } from 'dva';
import MyLayout from '../components/Layout';

const Layout = ({ layout }) => {
  const { isNavbar } = layout;
  return (
    <MyLayout isNavbar={isNavbar} />
  );
};

export default connect(({ layout }) => ({ layout }))(Layout)
;
