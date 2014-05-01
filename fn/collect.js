var restoresubstr = require('./restoresubstr');

function collect(L) {
	var m, n;

	var hash;
	var subs;
	var res;

	m = L.length;
	n = L[0].length;

	hash = {};
	subs = [];

	for (i = m - 1; i >= 0; i--) {
		for (j = n - 1; j >= 0; j--) {
			if (!hash[i + ',' + j] && L[i][j].len) {
				res = restoresubstr(hash, i, j, L);
				subs.push(res.sub);
				hash = res.hash;
			} else if (!L[i][j].len) {
				hash[i + ',' + j] = 1;
			}
		}
	}

	return subs;
}

module.exports = collect;