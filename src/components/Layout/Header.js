import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import cs from 'classnames';
import Menus from './Menus';
import styles from './index.less';

// const text = <span>Title</span>;
// const content = (
//   <div>
//     <p>Content</p>
//     <p>Content</p>
//   </div>
// );

const Header = ({ isNavbar, siderFold, switchSider, location }) => {
  const menuProps = {
    location,
    siderFold: false,
  };

  return (
    <div className={cs(styles.header, { aa: isNavbar })}>
      {isNavbar
        ? <Popover placement="topLeft" overlayClassName={styles.popovermenu} content={<Menus {...menuProps} />} trigger="click">
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div className={styles.button} onClick={switchSider}>
          <Icon type={cs({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
        </div>
      }
    </div>
  );
};

Header.propTypes = {
  isNavbar: PropTypes.bool,
};

export default Header;

