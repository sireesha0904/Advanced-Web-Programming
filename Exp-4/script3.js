function findFactors() {
  let number = parseInt(prompt("Enter a number:"));

  if (isNaN(number) || number <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  let factors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `The factors of ${number} are: ${factors.join(", ")}`;
}
