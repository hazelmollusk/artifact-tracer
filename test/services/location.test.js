const app = require('../../lib//app');

describe('\'location\' service', () => {
  it('registered the service', () => {
    const service = app.service('location');
    expect(service).toBeTruthy();
  });
});
