function somatorio(numero) {
  let count = 0;
  let nums = [];

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
      nums.push(i);
    }
  }
  console.log(`Os valores inteiros divisíveis por 3 ou 5 são: ${nums}`);
  return count;
}

let result = somatorio(10);
console.log(`Somatório: ${result}`);
