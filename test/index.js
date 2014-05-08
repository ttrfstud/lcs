var assert = require('assert');
var lcs = require('../index');

describe('lcs', function () {
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

		res = lcs(protein1, protein2, cutoff);

/*
			assert.deepEqual(res, [
				[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
				[{len: 0}, {len: 0},         {len: 2, acc: 1}],
				[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
			]);
*/

		assert.deepEqual(res, {
			subs: [
				{tgt: [1], exp: [2]},
				{tgt: [2, 1], exp: [1, 0]}
			],
			stats: [2, 2, 1]
		});

		done();
	});

	it('test2', function (done) {
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

		res = lcs(protein1, protein2, cutoff);

/*	
		assert.deepEqual(res, [
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
			[{len: 0}, {len: 0},         {len: 2, acc: 1}],
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
		]);
*/

		assert.deepEqual(res.subs, [
				{tgt: [1], exp: [2]},
				{tgt: [2, 1], exp: [1, 0]}
		]);

		assert.equal(res.stats.length, 3);
		assert.equal(res.stats[0], 2);
		assert.equal(res.stats[1], 2);
		assert.equal(res.stats[2], 1);

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

		res = lcs(protein1, protein2, cutoff);

/*	
		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}, {len: 2, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}, {len: 3, acc: 1}]
		]);
*/

		assert.deepEqual(res.subs, [
			{ tgt: [2, 1, 0], exp: [2, 1, 0] },
			{ tgt: [1, 0], exp: [2, 1] },
			{ tgt: [0], exp: [2] },
			{ tgt: [2, 1], exp: [1, 0] },
			{ tgt: [2], exp: [0] }
		]);

		assert.equal(res.stats.length, 3);
		assert.strictEqual(res.stats[0], 3);
		assert.strictEqual(res.stats[1], 3);
		assert.strictEqual(res.stats[2], 3);

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

		res = lcs(protein1, protein2, cutoff);

/*	
		assert.deepEqual(res, [
			[{len: 0}, {len: 0}, {len: 0}],
			[{len: 0}, {len: 0}, {len: 0}],
			[{len: 0}, {len: 0}, {len: 0}]
		]);
*/

		assert.deepEqual(res.subs, [
		]);

		assert.equal(res.stats.length, 0);

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

		res = lcs(protein1, protein2, cutoff);

/*		
		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}]
		]);
*/
		assert.deepEqual(res.subs, [
			{ tgt: [1, 0], exp: [2, 1] },
			{ tgt: [0], exp: [2] },
			{ tgt: [1, 0], exp: [1, 0] },
			{ tgt: [1], exp: [0] }
		]);

		assert.equal(res.stats.length, 3);
		assert.strictEqual(res.stats[0], 2);
		assert.strictEqual(res.stats[1], 2);
		assert.strictEqual(res.stats[2], 2);

		done();
	});

	it('test6', function (done) {
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
			[rootval, rootval, rootval]
		];

		protein2 = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];

		cutoff = 1;

		res = lcs(protein1, protein2, cutoff);

/*		
		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 1}, {len: 2, acc: 1}]
		]);
*/
		assert.deepEqual(res.subs, [
			{ tgt: [2, 1], exp: [1, 0] },
			{ tgt: [1, 0], exp: [1, 0] },
			{ tgt: [0], exp: [1] },
			{ tgt: [2], exp: [0] }
		]);

		assert.equal(res.stats.length, 2);
		assert.strictEqual(res.stats[0], 2);
		assert.strictEqual(res.stats[1], 2);

		done();
	});
});