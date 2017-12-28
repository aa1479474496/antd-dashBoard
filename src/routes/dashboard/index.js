import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { NumberCard } from './components';

const DashBoard = ({ dashboard }) => {
  const { numbers } = dashboard;
  const numberCards = numbers.map((item, key) => (
    <Col key={key} xl={6} lg={12}><NumberCard {...item} /></Col>
  ));

  return (
    <div>
      <h1>dashBoard</h1>
      <Row gutter={24}>
        {numberCards}
      </Row>
    </div>
  );
};
export default connect(({ dashboard }) => ({ dashboard }))(DashBoard);

