var assert = require('assert');
var countstats = require('../countstats');

describe.skip('countstats', function () {
	it('test1', function (done) {
		var subs;
		var res;

		subs = [
			{ tgt: [5, 4, 3], exp: [4, 3, 2] },
			{ tgt: [3, 2, 1, 0], exp: [4, 3, 2, 1] },
			{ tgt: [0], exp: [4] },
			{ tgt: [3, 2, 1, 0], exp: [3, 2, 1, 0] },
			{ tgt: [1], exp: [3] },
			{ tgt: [5, 4, 3], exp: [2, 1, 0] },
			{ tgt: [5, 4], exp: [1, 0] }
		];

		res = countstats(subs);

		assert.deepEqual(res, [4, 4, 4, 4, 4]);

		done();
	});

	it('test2', function (done) {
		var subs;
		var res;

		subs = [
			{ tgt: [5, 4], exp: [3, 2] },
			{ tgt: [4, 3], exp: [3, 2] },
			{ tgt: [3, 2], exp: [3, 2] },
			{ tgt: [2, 1], exp: [3, 2] },
		];

		res = countstats(subs);

		assert.equal(res.length, 4);
		assert.strictEqual(res[0], void 0);
		assert.strictEqual(res[1], void 0);
		assert.strictEqual(res[2], 2);
		assert.strictEqual(res[3], 2);

		done();
	});

	it('test3', function (done) {
		var subs;
		var res;

		subs = [
			{ tgt: [4], exp: [4] },
			{ tgt: [1], exp: [3] },
			{ tgt: [2], exp: [2] },
			{ tgt: [4], exp: [0] }
		];

		res = countstats(subs);

		assert.equal(res.length, 5);
		assert.strictEqual(res[0], 1);
		assert.strictEqual(res[1], void 0);
		assert.strictEqual(res[2], 1);
		assert.strictEqual(res[3], 1);
		assert.strictEqual(res[4], 1);

		done();
	});
});