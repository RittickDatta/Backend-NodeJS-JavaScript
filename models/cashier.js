module.exports = class Cashier {
  constructor(id, name, phone, email, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }

  getCashier(id) {}

  updateCashier(id, udpatedCashier) {}

  deleteCashier(id) {}
};
