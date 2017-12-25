import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import Menus from './Menus';
import styles from './index.less';

const Sider = () => {
  return (
    <div className={styles.sider}>
      <div className={styles.logo}>
        <img alt={'logo'} src="/logo.png" />
        <span>AntD Admin</span>
      </div>
      {<Menus />}

    </div>
  );
};

export default Sider;
