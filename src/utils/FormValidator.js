export default class FormValidator {

  constructor() {
    this.fieldValidators = {};
    this.validities = {};
    this.values = {};
    this.isFormValid = false;
  }

  notifyChanges(obj) {
    for(var name in obj) {
      this.notifyChange(name, obj[name], false);
    }
    this._checkValidity();
  }

  notifyChange(name, value, updateValidity = true) {
    this.values[name] = value;

    if (updateValidity) {
      this._checkValidity();
    }
  }

  addField(name, validator, defaultValue = null) {
    this.fieldValidators[name] = validator;
    this.values[name] = defaultValue;
    this.validities[name] = validator(defaultValue);
    this._checkValidity();
  }

  getValue(name) {
    return this.values[name];
  }

  getValidity(name) {
    return this.validities[name];
  }

  _checkValidity() {
    var isFormValid = true;
    for(var fieldName in this.fieldValidators) {
      var value = this.values[fieldName];
      var validity = this.fieldValidators[fieldName](value);
      this.validities[fieldName] = validity;
      isFormValid = validity && isFormValid;
    }

    this.isFormValid = isFormValid;
    if (this.onValidityChanged) {
      this.onValidityChanged(this.isFormValid);
    }
  }
}
