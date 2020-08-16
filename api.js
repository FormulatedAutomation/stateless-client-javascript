module.exports = class ApiClient {
  constructor() {
    this.apiUrl = "https://aion-dev.herokuapp.com";
  }

  async getValue(projectKey, scope) {
    const response = await fetch(`${this.apiUrl}/api/state/checkout/${projectKey}/${scope}`)
    if (!response.ok) {
      return null;
    }
    return await response.json();
  }

  async updateValue(key, value) {
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
    return resonseJson;
  }
}
