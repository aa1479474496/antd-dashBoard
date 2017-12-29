import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.less';

const SubMenu = Menu.SubMenu;

// const handleClick = ({ item, key, keypath }) => {
//   console.log(item);
// };

const Menus = ({ siderFold, location }) => {
  const { pathname } = location;


  const getKeys = (name) => {
    let defaultKeys;
    switch (name) {
      case '/dashboard':
        defaultKeys = ['1'];
        break;
      case '/users':
        defaultKeys = ['2'];
        break;
      default:
        defaultKeys = ['1'];
        break;
    }
    return defaultKeys;
  };

  const selectetKeys = getKeys(pathname);
  return (
    <div>
      <Menu
        selectedKeys={selectetKeys}
        mode="inline"
        theme="light"
        inlineCollapsed={siderFold}
        className={styles['ant-menu-vertical']}
      >
        <Menu.Item key="1">
          <Link to="/dashboard">
            <Icon type="pie-chart" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/users">
            <Icon type="desktop" />
            <span>Users</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>Posts</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Charts</span></span>}>
          <SubMenu key="9" title={<span><Icon type="appstore" /><span>Charts11</span></span>}>
            <SubMenu key="10" title={<span><Icon type="appstore" /><span>Charts22</span></span>} />
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Menus;

