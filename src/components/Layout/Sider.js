import React from 'react';
// import PropTypes from 'prop-types';
// import { Popover, Icon } from 'antd';
import cs from 'classnames';
import Menus from './Menus';
import styles from './index.less';

const Sider = ({ siderFold, location }) => {
  const menuProps = {
    siderFold,
    location,
  };
  return (
    <div className={cs(styles.sider, { [styles.fold]: siderFold })}>
      <div className={styles.logo}>
        <img alt={'logo'} src="/logo.png" />
        {siderFold ? '' : <span>AntD Admin</span>}
      </div>
      {<Menus {...menuProps} />}
    </div>
  );
};

export default Sider;
