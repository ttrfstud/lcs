function addrmsd(prmsd, cval) {
  var plen;
  var pval, spval;
  var clen;

  var res;

  plen = prmsd.len;
  pval = prmsd.acc;

  spval = pval * pval;

  spval = plen * spval;

  cval = cval + spval;

  console.log(cval);

  clen = plen + 1;

  cval = cval / clen;

  cval = Math.sqrt(cval);

  res = {
    acc: cval,
    len: clen
  };

  return res;
}

module.exports = addrmsd;