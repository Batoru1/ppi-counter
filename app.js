// let widthRes;
// let heightRes;
// let diagonal;

// widthRes = 1920;
// heightRes = 1080;
// diagonal = 15.6;

// countPpi();

// const countPpi = function (widthRes, heightRes, diagonal) {
//   return Math.sqrt(widthRes ** 2 + heightRes ** 2) / diagonal;
// };
// console.log(countPpi(2560, 1440, 32));

const countPpi = function (width, height, diagonal) {
  return Math.sqrt(width ** 2 + height ** 2) / diagonal;
};

document.querySelector('.btn').addEventListener('click', function () {
  let widthRes = Number(document.querySelector('.dataW').value);
  let heightRes = Number(document.querySelector('.dataH').value);
  let diagonal = Number(document.querySelector('.dataD').value);

  document.querySelector('.result').textContent = countPpi(
    widthRes,
    heightRes,
    diagonal
  );
});
