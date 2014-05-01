var kabsch = require('kabsch');

var sameres = require('./fn/sameres');
var restoresubstr = require('./fn/restoresubstr');

function lcs(protein1, protein2, cut) {

	// residues are the same
	// number of residues and their order is the same too?

	var m, n;
	var L;

	var i, j;
	var rmsd;

	var hash;
	var subs;

	m = protein1.length;
	n = protein2.length;

	L = [];

	for(i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			if (!L[i]) {
				L[i] = [];
			}

			if (sameres(protein1[i], protein2[j])) {
				if ((i === 0 || j === 0) && (rmsd = kabsh(protein1[i].atoms, protein2[j].atoms)) <= cut) {
					L[i][j] = {
						len: 1,
						acc: rmsd
					};
				} else if (L[i - 1][j - 1].acc + rmsd <= cut) {
					L[i][j] = {
						len: L[i - 1][j - 1].len + 1,
						acc: L[i - 1][j - 1].acc + rmsd
					};
				} /* else if (rmsd <= cut) {
					L[i][j] = {
						len: 1,
						acc: rmsd
					};
				} */ else {
					L[i][j] = {
						len: 0
					};
				}
				}
			} else {
				L[i][j] = {
					len: 0,
				};
			}
		}
	}

	// Now that all info is collected, we need to restore all non-zero-length conforming residual "substrings"

	hash = {};
	subs = collect(L, m, n, protein1, protein2);

	return {
		subs: subs,
		rec: rec
	};
}

module.exports = lcs;