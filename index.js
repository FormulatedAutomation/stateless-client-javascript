'use strict'
const ApiClient = require('./api');

module.exports = class StatelessClient {
  constructor(projectKey, scope) {
    this.projectKey = projectKey;
    this.scope = scope;
    this.changeIds = [];
    this.api = new ApiClient();
    this._data = null;
    this._getInitialData();
  }

  async getValue(key) {
    await this._getInitialData();
    return this._data[key];
  }

  async setValue(key, value) {
    await this.api.updateValue(key, value);
    this._getInitialData()
  }

  async _getInitialData() {
    const responseJson = await this.api.getValue(this.projectKey, this.scope)
    const currentData = responseJson['state']['data'];
    this._setChangeId(responseJson['changeId']);
    this._setData(currentData)
  }

  get _currentChangeId() {
    if (this.changeIds.length > 0) {
      return this.changeIds[0]
    } else {
      throw "Store not initialized before writing, you must check out by initing this class."
    }
  }

  _setChangeId(changeId) {
    this.changeIds.unshift(changeId);
  }

  _setData(data) {
    this._data = data;
  }

  async _getChangeInfo(changeId) {
    const response = await fetch(`${this.apiURL}/api/changes/${changeId}`);
    if (!response.ok) {
      throw "Could not connect to Stateless store"
    }
    const changeInfo = await response.json();
    return changeInfo;
  }

};
