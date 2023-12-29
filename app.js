const countPpi = function (width, height, diagonal) {
  return Math.sqrt(width ** 2 + height ** 2) / diagonal;
};

// let widthRes;
// let heightRes;
// let diagonal;

// widthRes = 1920;
// heightRes = 1080;
// diagonal = 15.6;

// countPpi();

console.log(countPpi(2560, 1440, 32));

const widthRes = function () {
  const inputWidth = document.getElementsByClassName('width');
  const width = inputWidth.value;
};
