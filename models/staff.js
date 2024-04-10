module.exports = class Staff {
  constructor(id, name, phone, email, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }

  getInfo(id) {}

  updateInfo(id, updatedSTaff) {}

  deleteStaff(id) {}
};
