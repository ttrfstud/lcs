function countstats(subs) {
	var stats;
	var i, j;
	var len;

	var expres;
	var explen;
	var tgtlen;

	len = subs.length;

	stats = [];

	for(i = 0; i < len; i++) {
		explen = subs[i].exp.length;
		tgtlen = subs[i].tgt.length;
		for (j = 0; j < explen; j++) {
			expres = subs[i].exp[j];

			if (!stats[expres]) {
				stats[expres] = tgtlen;
			}

			if (stats[expres] < tgtlen) {
				stats[expres] = tgtlen;
			}
		}
	}

	return stats;
}

module.exports = countstats;