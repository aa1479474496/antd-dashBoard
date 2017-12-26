import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import cs from 'classnames';
import styles from './index.less';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Header = ({ isNavbar, switchSider }) => {
  return (
    // <div className={`${styles.header} aa`}>
    <div className={cs(styles.header, { aa: isNavbar })}>
      {isNavbar
        ? <Popover placement="topLeft" title={text} content={content} trigger="click">
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div className={styles.button} onClick={switchSider}>
          <Icon type="menu-unfold" />
        </div>
      }


    </div>
  );
};

Header.propTypes = {
  isNavbar: PropTypes.bool,
};

export default Header;

