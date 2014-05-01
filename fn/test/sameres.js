var assert = require('assert');
var sameres = require('../sameres');

describe('sameres', function () {
  it('test same', function (done) {
    var res1, res2;

    res1 = { name: 'test_res1' };
    res2 = { name: 'test_res1' };

    assert(sameres(res1, res2));

    done();
  });

  it('test not same', function (done) {
    var res1, res2;

    res1 = { name: 'test_res1' };
    res2 = { name: 'test_res2' };

    assert.notEqual(sameres(res1, res2));

    done();
  });
});