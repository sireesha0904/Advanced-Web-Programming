function calculateProduct(event) {
  event.preventDefault();

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let product = 0;

  if (num1 === 0 || num2 === 0) {
    document.getElementById("result").innerHTML = "The product is 0";
    return;
  }

  for (let i = 0; i < num1; i++) {
    product = addWithoutPlus(product, num2);
  }

  document.getElementById(
    "result"
  ).innerHTML = `The product of ${num1} and ${num2} is: ${product}`;
}

function addWithoutPlus(a, b) {
  let result = a;
  let increment = 0;

  while (increment < b) {
    result = result + 1;
  }
  return result;
}
