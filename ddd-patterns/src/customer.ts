class Customer {
  // Now this class represents a richier entity.
  // Meaningful functions that represents bussiness logic.
  _id: string;
  _name: string;
  _address: string;
  _active: boolean = true;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  // Validations should ensure that the actual state of the entity is correct.
  // We should not create validations or exceptions without meaning.

  changeName(name: string) {
    this._name = name;
  }

  activate() {
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }
}
