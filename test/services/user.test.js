const app = require('../../lib//app');

describe('\'user\' service', () => {
  it('registered the service', () => {
    const service = app.service('user');
    expect(service).toBeTruthy();
  });
});
