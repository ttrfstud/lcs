var assert = require('assert');
var addrmsd = require('../addrmsd');

describe('addrmsd', function () {
  it('test1', function (done) {
    var prmsd;
    var cval;

    prmsd = {
      acc: 2,
      len: 2
    };

    cval = 1;

    assert.deepEqual(addrmsd(prmsd, cval), {
      acc: Math.sqrt(3),
      len: 3
    });

    done();
  });

  it('test2', function (done) {
    var prmsd;
    var cval;

    prmsd = {
      acc: 5,
      len: 5
    };

    cval = 739;

    assert.deepEqual(addrmsd(prmsd, cval), {
      acc: 12,
      len: 6
    });

    done();
  });

  it('test3', function (done) {
    var prmsd;
    var cval;

    prmsd = {
      acc: 1,
      len: 2,
    };

    cval = 1;

    assert.deepEqual(addrmsd(prmsd, cval), {
      acc: 1,
      len: 3
    });


    done();
  });
});