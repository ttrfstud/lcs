var addrmsd = require('./addrmsd');
var sdist = require('./sdist');

function determine(protein1, protein2, cut) {
	var L;
	var m, n;

	var sdists;
	var sdroot;
	var rmsd;

	m = protein1.length;
	n = protein2.length;

	L = [];

	for(i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			if (!L[i]) {
				L[i] = [];
			}

			sdists = sdist(protein1[i], protein2[j]);
			sdroot = Math.sqrt(sdists);
			
			if ((i === 0 || j === 0)) {
				if (sdroot <= cut) {
					console.log(i, j, 'b1', sdists);
					L[i][j] = {
						len: 1,
						acc: sdroot
					};
				} else {
					console.log(i, j, 'b2', sdists);
					L[i][j] = {
						len: 0
					};
				}
			} else if ( (rmsd = addrmsd(L[i - 1][j - 1], sdists)).acc <= cut) {
					console.log(i, j, 'b3', sdists, rmsd.acc, rmsd.len);
				L[i][j] = rmsd;
			}  else if (sdroot <= cut) {
				console.log(i, j, 'b4', sdists, rmsd);
				L[i][j] = {
					len: 1,
					acc: sdroot
				};
			}  else {
				console.log(i, j, 'b5', sdists);
				L[i][j] = {
					len: 0
				};
			}
		}
	}

	return L;
}

module.exports = determine;