var sameres = require('./sameres');

function determine(protein1, protein2, cut, rmsdc) {
	var L;
	var m, n;

	var rmsd;

	m = protein1.length;
	n = protein2.length;

	L = [];

	for(i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			if (!L[i]) {
				L[i] = [];
			}

			if (sameres(protein1[i], protein2[j])) {
				if ((i === 0 || j === 0) && (rmsd = rmsdc(protein1[i].atoms, protein2[j].atoms)) <= cut) {
					L[i][j] = {
						len: 1,
						acc: rmsd
					};
				} else if (L[i - 1][j - 1].acc + rmsd <= cut) {
					L[i][j] = {
						len: L[i - 1][j - 1].len + 1,
						acc: L[i - 1][j - 1].acc + rmsd
					};
				}  else if (rmsd <= cut) {
					L[i][j] = {
						len: 1,
						acc: rmsd
					};
				}  else {
					L[i][j] = {
						len: 0
					};
				}
			} else {
				L[i][j] = {
					len: 0,
				};
			}
		}
	}

	return L;
}

module.exports = determine;