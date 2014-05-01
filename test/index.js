var assert = require('assert');
var lcs = require('../index');

describe('lcs', function () {
	it('test1', function (done) {
		// protein2 (tgt): abc
		// protein1 (exp): bcb

		var protein1;
		var protein2;
		var kabsch;

		var res;

		kabsch = function () {
			return 1;
		};

		protein2 = [
			{name: 'a'},
			{name: 'b'},
			{name: 'c'}
		];

		protein1 = [
			{name: 'b'},
			{name: 'c'},
			{name: 'b'}
		];

		res = lcs(protein1, protein2, 1, kabsch);

		/*
			assert.deepEqual(res, [
				[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
				[{len: 0}, {len: 0},         {len: 1, acc: 1}],
				[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
			]);
		*/

		assert.deepEqual(res, {
			subs: [
				{tgt: [1], exp: [2]},
				{tgt: [2], exp: [1]},
				{tgt: [1], exp: [0]}
			],
			stats: [1, 1, 1]
		});

		done();
	});

	it('test2', function (done) {
		// protein2 (tgt): abc
		// protein1 (exp): bcb

		var protein1;
		var protein2;
		var kabsch;

		var res;

		kabsch = function () {
			return 1;
		};

		protein2 = [
			{name: 'a'},
			{name: 'b'},
			{name: 'c'}
		];

		protein1 = [
			{name: 'b'},
			{name: 'c'},
			{name: 'b'}
		];

		res = lcs(protein1, protein2, 2, kabsch);

/*		assert.deepEqual(res, [
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
			[{len: 0}, {len: 0},         {len: 2, acc: 2}],
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
		]);*/

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
		var kabsch;

		var res;

		kabsch = function () {
			return 1;
		};

		protein2 = [
			{name: 'a'},
			{name: 'a'},
			{name: 'a'}
		];

		protein1 = [
			{name: 'a'},
			{name: 'a'},
			{name: 'a'}
		];

		res = lcs(protein1, protein2, 2, kabsch);

/*		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 2, acc: 2}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 1, acc: 1}]
		]);*/

		assert.deepEqual(res.subs, [
			{ tgt: [2], exp: [2] },
			{ tgt: [1, 0], exp: [2, 1] },
			{ tgt: [0], exp: [2] },
			{ tgt: [2, 1], exp: [1, 0] },
			{ tgt: [1, 0], exp: [1, 0] },
			{ tgt: [2], exp: [0] }
		]);

		assert.equal(res.stats.length, 3);
		assert.strictEqual(res.stats[0], 2),
		assert.strictEqual(res.stats[1], 2),
		assert.strictEqual(res.stats[2], 2),

		done();
	});

	it('test4', function (done) {
		// protein2 (tgt): aaa
		// protein1 (exp): aaa

		var protein1;
		var protein2;
		var kabsch;

		var res;

		kabsch = function () {
			return 1;
		};

		protein2 = [
			{name: 'a'},
			{name: 'a'},
			{name: 'a'}
		];

		protein1 = [
			{name: 'a'},
			{name: 'a'},
			{name: 'a'}
		];

		res = lcs(protein1, protein2, 3, kabsch);

/*		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 2, acc: 2}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 3, acc: 3}]
		]);*/

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

	it('test5', function (done) {
		// protein2 (tgt): aa
		// protein1 (exp): aaa

		var protein1;
		var protein2;
		var kabsch;

		var res;

		kabsch = function () {
			return 1;
		};

		protein2 = [
			{name: 'a'},
			{name: 'a'}
		];

		protein1 = [
			{name: 'a'},
			{name: 'a'},
			{name: 'a'}
		];

		res = lcs(protein1, protein2, 3, kabsch);

/*		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}]
		]);*/

		assert.deepEqual(res.subs, [
			{ tgt: [1, 0], exp: [2, 1] },
			{ tgt: [0], exp: [2] }, 
			{ tgt: [1, 0], exp: [1, 0] },
			{ tgt: [1], exp: [0] },

		]);

		assert.equal(res.stats.length, 3);
		assert.strictEqual(res.stats[0], 2);
		assert.strictEqual(res.stats[1], 2);
		assert.strictEqual(res.stats[2], 2);

		done();
	});

	it('test6', function (done) {
		// protein2 (tgt): aaa
		// protein1 (exp): aa

		var protein1;
		var protein2;
		var kabsch;

		var res;

		kabsch = function () {
			return 1;
		};

		protein2 = [
			{name: 'a'},
			{name: 'a'},
			{name: 'a'}
		];

		protein1 = [
			{name: 'a'},
			{name: 'a'}
		];

		res = lcs(protein1, protein2, 3, kabsch);

/*		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 2, acc: 2}]
		]);*/

		assert.deepEqual(res.subs, [
			{ tgt: [2, 1], exp: [1, 0] },
			{ tgt: [1, 0], exp: [1, 0] },
			{ tgt: [0], exp: [1] },
			{ tgt: [2], exp: [0] }
		]);

		assert.equal(res.stats.length, 2);
		assert.equal(res.stats[0], 2);
		assert.equal(res.stats[1], 2);

		done();
	});
});