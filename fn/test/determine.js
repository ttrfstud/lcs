var assert = require('assert');
var determine = require('../determine');

describe('determine', function () {
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

		res = determine(protein1, protein2, 1, kabsch);

		console.log(res);

		assert.deepEqual(res, [
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
			[{len: 0}, {len: 0},         {len: 1, acc: 1}],
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
		]);

		done();
	});

	it.skip('test1', function (done) {
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

		res = determine(protein1, protein2, 2, kabsch);

		assert.deepEqual(res, [
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
			[{len: 0}, {len: 0},         {len: 2, acc: 2}],
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
		]);

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

		res = determine(protein1, protein2, 2, kabsch);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 2, acc: 2}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 1, acc: 1}]
		]);

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

		res = determine(protein1, protein2, 2, kabsch);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 2, acc: 2}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 1, acc: 1}]
		]);

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

		res = determine(protein1, protein2, 3, kabsch);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 2, acc: 2}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 3, acc: 3}]
		]);

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

		res = determine(protein1, protein2, 3, kabsch);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}]
		]);

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

		res = determine(protein1, protein2, 3, kabsch);

		assert.deepEqual(res, [
			[{len: 1, acc: 1}, {len: 1, acc: 1}, {len: 1, acc: 1}],
			[{len: 1, acc: 1}, {len: 2, acc: 2}, {len: 2, acc: 2}]
		]);

		done();
	});
});