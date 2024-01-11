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

document.querySelector('.reset').addEventListener('click', function () {
  let widthRes = Number((document.querySelector('.dataW').value = ''));
  let heightRes = Number((document.querySelector('.dataH').value = ''));
  let diagonal = Number((document.querySelector('.dataD').value = ''));

  document.querySelector('.result').textContent = '?';
});
