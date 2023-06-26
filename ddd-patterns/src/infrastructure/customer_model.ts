class CustomerModel {
  _id: string;
  _name: string;
  _address: string;
  _active: boolean;

  //Customer model for ORM purposes only. Access to database.

  constructor(id: string, name: string, address: string, active: boolean) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._active = active;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get address() {
    return this._address;
  }
  get active() {
    return this._active;
  }
}
