function validateForm() {
  let isValid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";

  const name = document.getElementById("name").value;
  if (!name) {
    document.getElementById("nameError").textContent = "Name is required!";
    isValid = false;
  }

  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required!";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email!";
    isValid = false;
  }

  const phone = document.getElementById("phone").value;
  const phonePattern = /^[0-9]{10}$/;
  if (!phone) {
    document.getElementById("phoneError").textContent =
      "Phone number is required!";
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits!";
    isValid = false;
  }

  return isValid; 
}
