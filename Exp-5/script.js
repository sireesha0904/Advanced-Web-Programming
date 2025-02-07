// 1. Student Table
document.addEventListener("DOMContentLoaded", function () {
  const students = [
    { name: "John", age: 18, grade: "A" },
    { name: "Alice", age: 19, grade: "B" },
    { name: "Bob", age: 18, grade: "C" },
    { name: "Emma", age: 20, grade: "A" },
    { name: "David", age: 19, grade: "B+" },
    { name: "Sophia", age: 17, grade: "A" },
    { name: "Liam", age: 18, grade: "B-" },
    { name: "Olivia", age: 20, grade: "C+" },
    { name: "Noah", age: 19, grade: "A-" },
    { name: "Mia", age: 18, grade: "B+" },
  ];

  const tbody = document.querySelector("#studentTable tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.name}</td><td>${student.age}</td><td>${student.grade}</td>`;
    tbody.appendChild(row);
  });
});

// 2. Array Operations (Min, Max, Sum)
function calculate() {
  let input = document.getElementById("arrayInput").value;
  let numbers = input.split(",").map((num) => parseFloat(num.trim()));

  if (numbers.length !== 10 || numbers.some(isNaN)) {
    document.getElementById("result").innerText =
      "Please enter exactly 10 valid numbers.";
    return;
  }

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let sum = numbers.reduce((acc, num) => acc + num, 0);

  document.getElementById(
    "result"
  ).innerText = `Min: ${min}, Max: ${max}, Sum: ${sum}`;
}

// 3. Change Background Color on Click
function changeColor() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4D03F", "#8E44AD"];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}
