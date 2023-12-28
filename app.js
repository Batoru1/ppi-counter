const ppi = function (a, b) {
  return Math.sqrt(widthRes ** 2 + heightRes ** 2) / diagonal;
};

let widthRes;
let heightRes;
let diagonal;

widthRes = 1920;
heightRes = 1080;
diagonal = 15.6;

ppi(1920, 1080);

console.log(ppi());
