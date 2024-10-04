
function heroSectionSubmitForm(event) {
  event.preventDefault();
  console.log("hi")
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("phone").value;
  const collegename = "CF1";
  const passedout = "CF1";
  const branch = "CF1";
  const course = document.getElementById("course").value;
  const program = "CF1";
  const howDoYouKnow = document.getElementById("message").value;

  console.log("values",name,email,number,collegename,passedout,branch,course,program,howDoYouKnow)

  // Perform validation checks
  const isNameValid = name.trim() !== "";
  const isEmailValid = validateEmailId();
  const isNumberValid = validateMobileNumber();
  const isCollegenameValid = collegename.trim() !== "";
  const isPassedoutValid = passedout.trim() !== "";
  const isBranchValid = branch.trim() !== "";
  const isCourseValid = course.trim() !== "";
  const isProgramValid = program.trim() !== "";
  const isHowDoYouKnowValid = howDoYouKnow.trim() !== "";
  console.log("boolean check",isNameValid,isEmailValid,isNumberValid,isCollegenameValid,isPassedoutValid,isBranchValid,isCourseValid,isProgramValid,isHowDoYouKnowValid)
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

  // Determine the leadLandingSource based on the current URL
  let leadLandingSource = "skillcentral-fullstackCoursePage";
  const currentUrl = window.location.href.toLowerCase();

  if (currentUrl.includes("fullstack-internship")) {
    leadLandingSource = "skillcentral-fullstackCoursePage";
  } else if (currentUrl.includes("dataanalytics-internship")) {
    leadLandingSource = "skillcentral-dataAnalyticsCoursePage";
  } else if (currentUrl.includes("digitalmarketing-internship")) {
    leadLandingSource = "skillcentral-digitalMarketingCoursePage";
  } else if (currentUrl.includes("machinelearning-internship")) {
    leadLandingSource = "skillcentral-machineLearningCoursePage";
  }

  // If all fields are valid, proceed with form submission
  const requestData = {
    leadFirstName: name,
    leadEmail: email,
    leadMobileNumber: number,
    leadCollegeName: collegename,
    leadPassedout: passedout,
    leadBranch: branch,
    leadCourse: course,
    leadProgram: program,
    leadHowDoYouKnow: howDoYouKnow,
    leadLandingSource: leadLandingSource,
  };
console.log(requestData)
  const apiUrl =
    "https://crmbackend.websocai.com/content-manager/collection-types/application::lead.lead";

  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcyNzE2MTgyMiwiZXhwIjoxNzI5NzUzODIyfQ.V898CRzXCLfURN6M-HAg3h4mjMlxxvuwgYwLX8omWOY";

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
      document.getElementById("contactForm").reset();
      redirectToThankYouPage(); // Redirect after successful form submission
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      alert("There was an error submitting the form. Please try again.");
    });
}

function validateEmailId() {
  console.log("hi email")
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var emailInput = document.getElementById("email");
  // var emailError = document.getElementById("email_error");

  if (emailRegex.test(email)) {
    console.log("email")
    emailInput.classList.remove("error");
    // emailError.textContent = "";
    return true;
  } else {
    console.log("error in mail")
    emailInput.classList.add("error");
    // emailError.textContent = "Please enter a valid email";
    return false;
  }
}

function validateMobileNumber() {
  console.log("hi mobile")
  var mobile = document.getElementById("phone").value;
  var mobileRegex = /^[6-9]\d{9}$/;
  var mobileInput = document.getElementById("phone");
  // var mobileError = document.getElementById("phone");

  // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
  if (mobileRegex.test(mobile)) {
    console.log("phone")
    mobileInput.classList.remove("error");
    // mobileError.textContent = "";
    return true;
  } else {
    console.log("error in phone")
    mobileInput.classList.add("error");
    // mobileError.textContent = "Please enter a valid mobile number";
    return false;
  }
}

function redirectToThankYouPage() {
  console.log("Form submitted successfully, but no redirection for now.");
}
