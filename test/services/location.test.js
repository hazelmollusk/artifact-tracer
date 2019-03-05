const assert = require('assert');
const app = require('../../lib/app');

describe('\'location\' service', () => {
  it('registered the service', () => {
    const service = app.service('location');

    assert.ok(service, 'Registered the service');
  });
});
