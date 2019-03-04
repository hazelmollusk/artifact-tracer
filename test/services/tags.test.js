const assert = require('assert');
const app = require('../../lib/app');

describe('\'tags\' service', () => {
  it('registered the service', () => {
    const service = app.service('tags');

    assert.ok(service, 'Registered the service');
  });
});
