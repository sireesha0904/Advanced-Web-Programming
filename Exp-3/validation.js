document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let department = document.getElementById("department").value;

    document.querySelectorAll("small").forEach((e) => (e.textContent = ""));

    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
      document.getElementById("nameError").textContent = "Enter a valid name";
      isValid = false;
    }

    if (!/^\d+$/.test(roll)) {
      document.getElementById("rollError").textContent =
        "Enter a valid roll number";
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Enter 10-digit phone number";
      isValid = false;
    }

    if (dob === "") {
      document.getElementById("dobError").textContent = "Select your DOB";
      isValid = false;
    }

    if (department === "") {
      document.getElementById("deptError").textContent = "Select department";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
