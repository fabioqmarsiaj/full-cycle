class Customer {
  // Now this class represents a richier entity.
  // Meaningful functions that represents bussiness logic.
  _id: string;
  _name: string;
  _address: string;
  _active: boolean = false;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this.validate();
  }

  // Validations should ensure that the actual state of the entity is correct.
  // We should not create validations or exceptions without meaning.

  // One entity should auto validate itself.
  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._address.length === 0) {
      throw new Error("Address is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  // Expressing a specific bussiness logic.
  // We should only activate a customer if the customer has an address.
  activate() {
    if (this._address.length === 0) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }
}
