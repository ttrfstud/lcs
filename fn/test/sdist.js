var assert = require('assert');
var sdist = require('../sdist');

describe.skip('sdist', function () {

  it('test1', function (done) {
    var point1;
    var point2;

    point1 = [1, 2, 3];
    point2 = [2, 3, 5];

    assert.equal(sdist(point1, point2), 6);

    done();
  });

  it('test2', function (done) {
    var point1;
    var point2;

    point1 = [3, -1, 3];
    point2 = [5, 3, 5];

    assert.equal(sdist(point1, point2), 24);

    done();
  });

  it('test3', function (done) {
    var point1;
    var point2;

    point1 = [1, 2, 3];
    point2 = [1, 2, 3];

    assert.equal(sdist(point1, point2), 0);

    done();
  });
});