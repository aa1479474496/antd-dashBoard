import React from 'react';
// import PropTypes from 'prop-types';
import { Icon, Card } from 'antd';
// import CountUp from 'react-countup';
import styles from './numberCard.less';

// const NumberCard = () => {
//   return (
//     <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
//       <Icon className={styles.iconWarp} style={{ color: '#64ea91' }} type="pay-circle-o" />
//       <div className={styles.content}>
//         <p className={`${styles.title} ${styles['text-overflow']}`}>Online Review</p>
//         <p className={`${styles.number} ${styles['text-overflow']}`}>2,781</p>
//       </div>
//     </Card>
//   );
// };

const NumberCard = ({ icon, color, title, number }) => {
  return (
    <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
      <Icon className={styles.iconWarp} style={{ color }} type={icon} />
      <div className={styles.content}>
        <p className={`${styles.title} ${styles['text-overflow']}`}>{title}</p>
        <p className={`${styles.number} ${styles['text-overflow']}`}>{number}</p>
      </div>
    </Card>
  );
};

export default NumberCard;
