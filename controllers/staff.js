exports.takeOrder = (req, res, next) => {
  res.send('Take Order');
};

exports.placeOrder = (req, res, next) => {
  res.send('Place Order');
};

exports.collectOrder = (req, res, send) => {
  res.send('Collect Order');
};

exports.deliverOrder = (req, res, send) => {
  res.send('Deliver Order');
};

exports.checkWithCustomer = (req, res, send) => {
  res.send('Check With Customer');
};

exports.collectReview = (req, res, send) => {
  res.send('Collect Review');
};

exports.collectPayment = (req, res, send) => {
  res.send('Collect Payment');
};

exports.bidFarewell = (req, res, send) => {
  res.send('Bid Farewell');
};
