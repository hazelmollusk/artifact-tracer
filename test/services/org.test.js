const assert = require('assert');
const app = require('../../lib/app');

describe('\'org\' service', () => {
  it('registered the service', () => {
    const service = app.service('org');

    assert.ok(service, 'Registered the service');
  });
});
