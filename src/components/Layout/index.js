import React from 'react';
import Header from './Header';
import Sider from './Sider';
import styles from './index.less';


const MyLayout = ({ isNavbar }) => {
  return (
    <div>
      <Sider />
      <div className={styles.main}>
        <Header isNavbar={isNavbar} />
      </div>
    </div>
  );
};

export default MyLayout;
