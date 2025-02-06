document
  .getElementById("marksForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    let regNo = document.getElementById("regNo").value.trim();
    let name = document.getElementById("name").value.trim();
    let subject1 = document.getElementById("subject1").value;
    let subject2 = document.getElementById("subject2").value;
    let subject3 = document.getElementById("subject3").value;

    // Clear previous errors
    document.getElementById("regNoError").innerText = "";
    document.getElementById("nameError").innerText = "";
    document.getElementById("subject1Error").innerText = "";
    document.getElementById("subject2Error").innerText = "";
    document.getElementById("subject3Error").innerText = "";

    if (!regNo.match(/^\d+$/)) {
      document.getElementById("regNoError").innerText =
        "Enter a valid registration number.";
      isValid = false;
    }

    if (!name.match(/^[A-Za-z\s]+$/)) {
      document.getElementById("nameError").innerText =
        "Enter a valid name (letters only).";
      isValid = false;
    }

    if (subject1 < 0 || subject1 > 50 || subject1 === "") {
      document.getElementById("subject1Error").innerText =
        "Marks must be between 0 and 50.";
      isValid = false;
    }
    if (subject2 < 0 || subject2 > 50 || subject2 === "") {
      document.getElementById("subject2Error").innerText =
        "Marks must be between 0 and 50.";
      isValid = false;
    }
    if (subject3 < 0 || subject3 > 50 || subject3 === "") {
      document.getElementById("subject3Error").innerText =
        "Marks must be between 0 and 50.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
