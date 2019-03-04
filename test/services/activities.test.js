const assert = require('assert');
const app = require('../../lib/app');

describe('\'activities\' service', () => {
  it('registered the service', () => {
    const service = app.service('activities');

    assert.ok(service, 'Registered the service');
  });
});
