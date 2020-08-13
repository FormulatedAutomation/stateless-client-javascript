'use strict'
const fetch = require('node-fetch');

module.exports = class StatelessClient {
  constructor(projectKey, scope) {
    this.projectKey = projectKey;
    this.scope = scope;
    this.apiUrl = "https://aion-dev.herokuapp.com";
    this.changeIds = [];
    this._data = null;
    this._getInitialData();
  }

  async getValue(key) {
    await this._getInitialData();
    return this._data[key];
  }

  async setValue(key, value) {
    const response = await fetch(`${this.apiUrl}/api/state/commit/${this._currentChangeId}/${this.scope}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });
    const responseJson = await response.json();
    if (responseJson['committed'] === undefined) {
      throw "Change not committed, please check network!"
    }
    this._getInitialData()
  }

  async _getInitialData() {
    const response = await fetch(`${this.apiUrl}/api/state/checkout/${this.projectKey}/${this.scope}`)
    if (!response.ok) {
      return null;
    }
    const responseJson = await response.json();
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

};
