var determine = require('./fn/determine');
var collect = require('./fn/collect');
var countstats = require('./fn/countstats');

function lcs(protein1, protein2, cut, rmsdc) {
	var L;
	var subs;
	var stats;

	L = determine(protein1, protein2, cut, rmsdc);
	subs = collect(L);
	stats = countstats(subs);

	return {
		subs: subs,
		stats: stats
	};
}

module.exports = lcs;