const assert = require('assert');
const app = require('../../lib/app');

describe('\'ou\' service', () => {
  it('registered the service', () => {
    const service = app.service('ou');

    assert.ok(service, 'Registered the service');
  });
});
