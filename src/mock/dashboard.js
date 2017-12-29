
const Mock = require('mockjs');

const dashboard = Mock.mock({
  numbers: [
    {
      icon: 'pay-circle-o',
      color: '#64ea91',
      title: 'Online Review',
      number: 2781,
    }, {
      icon: 'team',
      color: '#8fc9fb',
      title: 'New Customers',
      number: 3241,
    }, {
      icon: 'message',
      color: '#d897eb',
      title: 'Active Projects',
      number: 253,
    }, {
      icon: 'shopping-cart',
      color: '#f69899',
      title: 'Referrals',
      number: 4324,
    },
  ],
});

const test = Mock.mock({
  ax: '1234567',
});

module.exports = {
  'GET /test/aaa': function (req, res) {
    res.status(200).json(dashboard);
  },
  'GET /axiostest': function (req, res) {
    res.status(200).json(test);
  },

  'POST /api/users': function (req, res) {
    const user = req.body;
    // console.log(req);
    user.id = Mock.mock('@id');
    // db.data.push(user);

    res.status(200).json(user);
  },
};
