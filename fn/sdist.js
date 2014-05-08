function sdist(point1, point2) {
  var dx;
  var dy;
  var dz;

  console.log(point1, point2);
  dx = point1[0] - point2[0];
  dx = dx * dx;

  dy = point1[1] - point2[1];
  dy = dy * dy;

  dz = point1[2] - point2[2];
  dz = dz * dz;

  return dx + dy + dz;
}

module.exports = sdist;