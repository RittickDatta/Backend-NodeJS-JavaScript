exports.takePayment = (req, res, next) => {
  res.send('Take Payment');
};

exports.returnChange = (req, res, next) => {
  res.send('Return Change');
};

exports.updateTransactions = (req, res, next) => {
  res.send('Update Transactions');
};

exports.getSummary = (req, res, next) => {
  res.send('Get Summary');
};
