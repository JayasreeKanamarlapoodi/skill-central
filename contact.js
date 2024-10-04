// function submitForm() {
//     const name = document.getElementById('form_name').value;
//     const email = document.getElementById('form_email').value;
//     const number = document.getElementById('form_number').value;
//     const collegename = document.getElementById('form_college').value;
//     const passedout = document.getElementById('form_passedoutyear').value;
//     const branch = document.getElementById('form_branch').value;
//     const course = document.getElementById('form_course').value;
//     const program = document.getElementById('form_program').value;
//     const howDoYouKnow = document.getElementById('form_howdoyouknow').value;

//     // Perform validation checks
//     const isNameValid = name.trim() !== '';
//     const isEmailValid = validateEmail();
//     const isNumberValid = validateMobile();
//     const isCollegenameValid = collegename.trim() !== '';
//     const isPassedoutValid = passedout.trim() !== '';
//     const isBranchValid = branch.trim() !== '';
//     const isCourseValid = course.trim() !== '';
//     const isProgramValid = program.trim() !== '';
//     const isHowDoYouKnowValid = howDoYouKnow.trim() !== '';

//     // Check if all fields are valid
//     if (!(isNameValid && isEmailValid && isNumberValid && isCollegenameValid && isPassedoutValid && isBranchValid && isCourseValid && isProgramValid && isHowDoYouKnowValid)) {
//         alert('Please fill in all fields correctly.');
//         return; // Prevent form submission if any field is invalid
//     }

//     // If all fields are valid, proceed with form submission
//     const requestData = {
//         leadFirstName: name,
//         leadEmail: email,
//         leadMobileNumber: number,
//         leadCollegeName: collegename,
//         leadPassedout: passedout,
//         leadBranch: branch,
//         leadCourse: course,
//         leadProgram: program,
//         leadHowDoYouKnow: howDoYouKnow,
//         leadLandingSource: "skillcentral-fsdCoursePage"
//     };

//     const apiUrl = "https://crmbackend.websoc.ai/content-manager/collection-types/application::lead.lead";

//     const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcxODM2MjkwNSwiZXhwIjoxNzIwOTU0OTA1fQ.MMH0QQMZD-CUyDP6ss7RLQpsZ1e-6rrNXhuvVXlWmX4";

//     const fetchOptions = {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${bearerToken}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestData)
//     };

//     fetch(apiUrl, fetchOptions)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Response:', data);
//             document.getElementById('contact-form').reset();
//             redirectToThankYouPage(); // Redirect after successful form submission
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

//   function validateEmail() {
//     var email = document.getElementById("form_email").value;
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     var emailInput = document.getElementById("form_email");
//     var emailError = document.getElementById("email_error");

//     if (emailRegex.test(email)) {
//         emailInput.classList.remove("error");
//         emailError.textContent = "";
//         return true;
//     } else {
//         emailInput.classList.add("error");
//         emailError.textContent = "Please enter a valid email";
//         return false;
//     }
//   }

//   function validateMobile() {
//     var mobile = document.getElementById("form_number").value;
//     var mobileRegex = /^[6-9]\d{9}$/;
//     var mobileInput = document.getElementById("form_number");
//     var mobileError = document.getElementById("mobile_error");

//     // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
//     if (mobileRegex.test(mobile)) {
//         mobileInput.classList.remove("error");
//         mobileError.textContent = "";
//         return true;
//     } else {
//         mobileInput.classList.add("error");
//         mobileError.textContent = "Please enter a valid mobile number";
//         return false;
//     }
//   }

//   function redirectToThankYouPage() {

//     window.location.href = 'thankyou.html';

//   }

function submitForm() {
  const name = document.getElementById("form_name").value;
  const email = document.getElementById("form_email").value;
  const number = document.getElementById("form_number").value;
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
      document.getElementById("contact-form").reset();
      redirectToThankYouPage(); // Redirect after successful form submission
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      alert("There was an error submitting the form. Please try again.");
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

function redirectToThankYouPage() {
  window.location.href = "thankyou.html";
}
