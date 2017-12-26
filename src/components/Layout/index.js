import React from 'react';
import cs from 'classnames';
import Header from './Header';
import Sider from './Sider';
import styles from './index.less';


const MyLayout = ({ children, isNavbar, switchSider, siderFold }) => {
  const headerProps = {
    isNavbar,
    siderFold,
    switchSider,
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

export default MyLayout;
