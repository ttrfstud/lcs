var assert = require('assert');
var restoresubstr = require('../restoresubstr');

describe('', function () {
	it('test, to top', function (done) {
		var m;
		var hash;

		m = [
			[0, {len: 1, acc: 100}, 0,                  0                 , 0                 ],
			[0, 0,                  {len: 2, acc: 200}, 0                 , 0                 ],
			[0, 0,                  0,                  {len: 3, acc: 300}, 0                 ],
			[0, 0,                  0,                  0,                  {len: 4, acc: 400}]
		];

		hash = {};

		assert.deepEqual(restoresubstr(hash, 3, 4, m), {
			len: 4,
			sub: {
				tgt: [4, 3, 2, 1],
				exp: [3, 2, 1, 0]
			},
			hash: {
				'3,4': 1,
				'2,3': 1,
				'1,2': 1,
				'0,1': 1
			}
		});

		done();
	});

	it('test, not to top', function () {
		done();
	});
});