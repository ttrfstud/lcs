var assert = require('assert');
var collect = require('../collect');

describe('collect', function () {
	it('test1', function (done) {
		var m;

		m = [
					/*   0        1        2          3         4          5    */
					/* -------------------------------------------------------- */
/* 0 */			[{len: 1}, 0,               0, {len: 1}, {len: 1}, 0       ],
/* 1 */			[{len: 1}, {len: 2},        0,        0, {len: 2}, {len: 2}],
/* 2 */			[       0, {len: 2}, {len: 3}, {len: 1},        0, {len: 3}],
/* 3 */			[       0, {len: 1}, {len: 3}, {len: 4}, {len: 2}, 0       ],
/* 4 */     [{len: 1},        0,        0, {len: 4},        0, {len: 3}]
		];

		assert.deepEqual(collect(m), [
			{ tgt: [5, 4, 3], exp: [4, 3, 2] },
			{ tgt: [3, 2, 1, 0], exp: [4, 3, 2, 1] },
			{ tgt: [0], exp: [4] },
			{ tgt: [3, 2, 1, 0], exp: [3, 2, 1, 0] },
			{ tgt: [1], exp: [3] },
			{ tgt: [5, 4, 3], exp: [2, 1, 0] },
			{ tgt: [5, 4], exp: [1, 0] }
		]);

		done();
	});

	it('test2', function (done) {
		var m;

		m = [
					/*   0        1        2          3         4          5    */
					/* -------------------------------------------------------- */
/* 0 */			[       0,        0,        0,        0,        0,        0],
/* 1 */			[       0,        0,        0,        0,        0,        0],
/* 2 */			[       0, {len: 1}, {len: 1}, {len: 1}, {len: 1},        0],
/* 3 */			[       0,        0, {len: 2}, {len: 2}, {len: 2}, {len: 2}],
/* 4 */     [       0,        0,        0,        0,        0,        0]
		];

		assert.deepEqual(collect(m), [
			{ tgt: [5, 4], exp: [3, 2] },
			{ tgt: [4, 3], exp: [3, 2] },
			{ tgt: [3, 2], exp: [3, 2] },
			{ tgt: [2, 1], exp: [3, 2] },
		]);

		done();
	});

	it('test3', function (done) {
		var m;

		m = [
					/*   0        1        2          3         4          5    */
					/* -------------------------------------------------------- */
/* 0 */			[       0,        0,        0,        0, {len: 1},        0],
/* 1 */			[       0,        0,        0,        0,        0,        0],
/* 2 */			[       0,        0, {len: 1},        0,        0,        0],
/* 3 */			[       0, {len: 1},        0,        0,        0,        0],
/* 4 */     [       0,        0,        0,        0, {len: 1},        0]
		];

		assert.deepEqual(collect(m), [
			{ tgt: [4], exp: [4] },
			{ tgt: [1], exp: [3] },
			{ tgt: [2], exp: [2] },
			{ tgt: [4], exp: [0] }
		]);

		done();
	});

	it('test4', function (done) {
		var m;

		m  = [
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ],
			[{len: 0}, {len: 0},         {len: 1, acc: 1}],
			[{len: 0}, {len: 1, acc: 1}, {len: 0}        ]
		];

		assert.deepEqual(collect(m), [
			{tgt: [1], exp: [2]},
			{tgt: [2], exp: [1]},
			{tgt: [1], exp: [0]}
		]);

		done();
	});
});