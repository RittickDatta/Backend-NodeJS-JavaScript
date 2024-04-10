exports.getMenu = (req, res, next) => {
  res.send('Get Menu');
};

exports.orderItems = (req, res, next) => {
  res.send('Order Items');
};

exports.cancelItems = (req, res, next) => {
  res.send('Cancel Items');
};

exports.reviewItems = (req, res, next) => {
  res.send('Review Items');
};

exports.payBill = (req, res, next) => {
  res.send('Pay Bill');
};
