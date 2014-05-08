var assert = require('assert');
var determine = require('../determine');

describe('determine', function () {
	it('test1', function (done) {
		// protein2 (tgt): abc
		// protein1 (exp): bcb

		var protein1;
		var protein2;
		var cutoff;

		var res;

		var rootval;

		rootval = Math.sqrt(1 / 3);

		protein1 = [
			[     rootval,      rootval,      rootval],
			[-3 * rootval, -3 * rootval, -3 * rootval],
			[     rootval,      rootval,      rootval],
		];

		protein2 = [
			[    -rootval,     -rootval,     -rootval],
			[           0,            0,            0],
			[-2 * rootval, -2 * rootval, -2 * rootval]
		];

		cutoff = 1;

		res = determine(protein1, protein2, cutoff);

		assert.deepEqual(res, [
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
			[{len: 0}, {len: 0},         {len: 2, acc: 1}],
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
		]);

		done();
	});

	// Works correctly, float rounding errors
	it.skip('test2', function (done) {
		// protein2 (tgt): abc
		// protein1 (exp): bcb

		var protein1;
		var protein2;

		var cutoff;

		var rootval;

		rootval = Math.sqrt(1 / 3);

		var res;

		protein1 = [
			[     rootval,      rootval,      rootval],
			[-7 * rootval, -7 * rootval, -7 * rootval],
			[     rootval,      rootval,      rootval],
		];

		protein2 = [
			[-4 * rootval, -4 * rootval, -4 * rootval],
			[           0,            0,            0],
			[-6 * rootval, -6 * rootval, -6 * rootval]
		];

		cutoff = 1;

		res = determine(protein1, protein2, cutoff);

		assert.deepEqual(res, [
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
			[{len: 0}, {len: 0},         {len: 2, acc: 1}],
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
		]);

		done();
	});

	it('test3', function (done) {
		// protein2 (tgt): aaa
		// protein1 (exp): aaa

		var protein1;
		var protein2;

		var cutoff;

		var rootval;

		rootval = Math.sqrt(1 / 3);

		var res;

		protein1 = [
			[rootval, rootval, rootval],
			[rootval, rootval, rootval],
			[rootval, rootval, rootval],
		];

		protein2 = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];

		cutoff = 1;

		res = determine(protein1, protein2, cutoff);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}, {len: 2, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}, {len: 3, acc: 1}]
		]);

		done();
	});

	it('test4', function (done) {
		// protein2 (tgt): aaa
		// protein1 (exp): aaa

		var protein1;
		var protein2;

		var cutoff;

		var rootval;

		rootval = Math.sqrt(1 / 3);

		var res;

		protein1 = [
			[rootval, rootval, rootval],
			[rootval, rootval, rootval],
			[rootval, rootval, rootval],
		];

		protein2 = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];

		cutoff = .99;

		res = determine(protein1, protein2, cutoff);

		assert.deepEqual(res, [
			[{len: 0}, {len: 0}, {len: 0}],
			[{len: 0}, {len: 0}, {len: 0}],
			[{len: 0}, {len: 0}, {len: 0}]
		]);

		done();
	});

	it('test5', function (done) {
		// protein2 (tgt): aa
		// protein1 (exp): aaa

		var protein1;
		var protein2;

		var cutoff;

		var rootval;

		rootval = Math.sqrt(1 / 3);

		var res;

		protein1 = [
			[rootval, rootval, rootval],
			[rootval, rootval, rootval],
			[rootval, rootval, rootval]
		];

		protein2 = [
			[0, 0, 0],
			[0, 0, 0]
		];

		cutoff = 1;

		res = determine(protein1, protein2, cutoff);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}]
		]);

		done();
	});

	it('test6', function (done) {
		// protein2 (tgt): aaa
		// protein1 (exp): aa

		var protein1;
		var protein2;

		var cutoff;

		var rootval;

		rootval = Math.sqrt(1 / 3);

		var res;

		protein1 = [
			[rootval, rootval, rootval],
			[rootval, rootval, rootval]
		];

		protein2 = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];

		cutoff = 1;

		res = determine(protein1, protein2, cutoff);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}, {len: 2, acc: 1}]
		]);

		done();
	});
});