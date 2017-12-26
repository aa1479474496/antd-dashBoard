import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.less';

const SubMenu = Menu.SubMenu;

// const handleClick = ({ item, key, keypath }) => {
//   console.log(item);
// };

const Menus = ({ siderFold }) => {
  return (
    <div>
      <Menu
        defaultSelectedKeys={['1']}
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
          <Menu.Item key="9">ECharts</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Menus;

