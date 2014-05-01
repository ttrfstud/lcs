function copy(obj) {
  var i;
  var copy;

  copy = {};

  for (i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = obj[i];
    }
  }

  return copy;
}

function restoresubstr(hash, i, j, L) {
  var chash;
  var sub;
  var len;

  chash = copy(hash);

  sub = {
    exp: [],
    tgt: []
  };

  len = 0;

  while(L[i] && L[i][j] && L[i][j].len) {
    chash[i + ',' + j] = 1;
    sub.exp.push(i);
    sub.tgt.push(j);
    i -= 1;
    j -= 1;
    len += 1;
  }

  return {
    sub: sub,
    hash: chash,
    len: len
  };
}

module.exports = restoresubstr;