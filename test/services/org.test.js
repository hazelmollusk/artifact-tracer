const app = require('../../lib//app');

describe('\'org\' service', () => {
  it('registered the service', () => {
    const service = app.service('org');
    expect(service).toBeTruthy();
  });
});
