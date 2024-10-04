function submitForm() {
  const name = document.getElementById("form_name").value;
  const email = document.getElementById("form_email").value;
  const number = document.getElementById("form_number").value;
  // const alternatenumber = document.getElementById('form_alternatenumber').value;

  const collegename = document.getElementById("form_college").value;
  const passedout = document.getElementById("form_passedoutyear").value;
  const branch = document.getElementById("form_branch").value;
  const course = document.getElementById("form_course").value;
  const program = document.getElementById("form_program").value;
  const howDoYouKnow = document.getElementById("form_howdoyouknow").value;

  // Perform validation checks
  const isNameValid = name.trim() !== "";
  const isEmailValid = validateEmail();
  const isNumberValid = validateMobile();
  // const isAlternateNumberValid = validateAlternateMobile();

  const isCollegenameValid = collegename.trim() !== "";
  const isPassedoutValid = passedout.trim() !== "";
  const isBranchValid = branch.trim() !== "";
  const isCourseValid = course.trim() !== "";
  const isProgramValid = program.trim() !== "";
  const isHowDoYouKnowValid = howDoYouKnow.trim() !== "";

  // Check if all fields are valid
  if (
    !(
      isNameValid &&
      isEmailValid &&
      isNumberValid &&
      isCollegenameValid &&
      isPassedoutValid &&
      isBranchValid &&
      isCourseValid &&
      isProgramValid &&
      isHowDoYouKnowValid
    )
  ) {
    alert("Please fill in all fields correctly.");
    return; // Prevent form submission if any field is invalid
  }

  // If all fields are valid, proceed with form submission
  const requestData = {
    leadFirstName: name,
    leadEmail: email,
    leadMobileNumber: number,
    // leadAlternateNumber:alternatenumber,
    leadCollegeName: collegename,
    leadPassedout: passedout,
    leadBranch: branch,
    leadCourse: course,
    leadProgram: program,
    leadHowDoYouKnow: howDoYouKnow,
    leadLandingSource: "skillcentral-fsdCourseLandingPage",
  };

  const apiUrl =
    "https://crmbackend.websocai.com/content-manager/collection-types/application::lead.lead";

  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcyNzI0OTc4MywiZXhwIjoxNzI5ODQxNzgzfQ.ZRlDJx9b4lD-a0etc0rclZ1uocfyI5z9cfzZPn7hoVM";

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  };

  fetch(apiUrl, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response:", data);
      // downloadPDFFullStackNavBar()
      document.getElementById("contact-form").reset();
      redirectToThankYouPage(); // Redirect after successful form submission
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function validateEmail() {
  var email = document.getElementById("form_email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var emailInput = document.getElementById("form_email");
  var emailError = document.getElementById("email_error");

  if (emailRegex.test(email)) {
    emailInput.classList.remove("error");
    emailError.textContent = "";
    return true;
  } else {
    emailInput.classList.add("error");
    emailError.textContent = "Please enter a valid email";
    return false;
  }
}

function validateMobile() {
  var mobile = document.getElementById("form_number").value;
  var mobileRegex = /^[6-9]\d{9}$/;
  var mobileInput = document.getElementById("form_number");
  var mobileError = document.getElementById("mobile_error");

  // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
  if (mobileRegex.test(mobile)) {
    mobileInput.classList.remove("error");
    mobileError.textContent = "";
    return true;
  } else {
    mobileInput.classList.add("error");
    mobileError.textContent = "Please enter a valid mobile number";
    return false;
  }
}

function downloadPDFFullStackNavBar() {
  const pdfUrl = "assets/Brochure/SkillCentral - Full Stack Brochure.pdf";
  const fileName = "SkillCentral - Full Stack Brochure.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = fileName;
  link.click();
}

function redirectToThankYouPage() {
  window.location.href = "thankyou.html";
}
