// function submitFormFooter() {
//     const name = document.getElementById('form_name_footer').value;
//     console.log(name)
//     const email = document.getElementById('form_email_footer').value;
//     const number = document.getElementById('form_number_footer').value;
//     const collegename = document.getElementById('form_college_footer').value;
//     const passedout = document.getElementById('form_passedoutyear_footer').value;
//     const branch = document.getElementById('form_branch_footer').value;
//     const course = document.getElementById('form_course_footer').value;
//     const program = document.getElementById('form_program_footer').value;
//     const howDoYouKnow = document.getElementById('form_howdoyouknow_footer').value;

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
//         leadLandingSource: "skillcentral-dataAnalyticsLandingPage"
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
//             document.getElementById('contact-form_footer').reset();
//             redirectToThankYouPage(); // Redirect after successful form submission
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
//   }

//   function validateEmail_footer() {
//     var email = document.getElementById("form_email_footer").value;
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     var emailInput = document.getElementById("form_email_footer");
//     var emailError = document.getElementById("email_error_footer");

//     if (emailRegex.test(email)) {
//         emailInput.classList.remove("error_footer");
//         emailError.textContent = "";
//         return true;
//     } else {
//         emailInput.classList.add("error_footer");
//         emailError.textContent = "Please enter a valid email";
//         return false;
//     }
//   }

//   function validateMobile_footer() {
//     var mobile = document.getElementById("form_number_footer").value;
//     var mobileRegex = /^[6-9]\d{9}$/;
//     var mobileInput = document.getElementById("form_number_footer");
//     var mobileError = document.getElementById("mobile_error_footer");

//     // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
//     if (mobileRegex.test(mobile)) {
//         mobileInput.classList.remove("error_footer");
//         mobileError.textContent = "";
//         return true;
//     } else {
//         mobileInput.classList.add("error_footer");
//         mobileError.textContent = "Please enter a valid mobile number";
//         return false;
//     }
//   }

//   function redirectToThankYouPage() {

//     window.location.href = 'thankyou.html';

//   }

// function submitFormFooter(event) {
//     event.preventDefault();

//     const name = document.getElementById('form_name_footer').value;
//     const email = document.getElementById('form_email_footer').value;
//     const number = document.getElementById('form_number_footer').value;
//     const collegename = document.getElementById('form_college_footer').value;
//     const passedout = document.getElementById('form_passedoutyear_footer').value;
//     const branch = document.getElementById('form_branch_footer').value;
//     const course = document.getElementById('form_course_footer').value;
//     const program = document.getElementById('form_program_footer').value;
//     const howDoYouKnow = document.getElementById('form_howdoyouknow_footer').value;

//     // Perform validation checks
//     const isNameValid = name.trim() !== '';
//     const isEmailValid = validateEmail_footer();
//     const isNumberValid = validateMobile_footer();
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
//         leadLandingSource: "skillcentral-dataAnalyticsLandingPage-Footer"
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
//             document.getElementById('contact-form_footer').reset();
//             redirectToThankYouPage(); // Redirect after successful form submission
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// function validateEmail_footer() {
//     var email = document.getElementById("form_email_footer").value;
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     var emailInput = document.getElementById("form_email_footer");
//     var emailError = document.getElementById("email_error_footer");

//     if (emailRegex.test(email)) {
//         emailInput.classList.remove("error_footer");
//         emailError.textContent = "";
//         return true;
//     } else {
//         emailInput.classList.add("error_footer");
//         emailError.textContent = "Please enter a valid email";
//         return false;
//     }
// }

// function validateMobile_footer() {
//     var mobile = document.getElementById("form_number_footer").value;
//     var mobileRegex = /^[6-9]\d{9}$/;
//     var mobileInput = document.getElementById("form_number_footer");
//     var mobileError = document.getElementById("mobile_error_footer");

//     // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
//     if (mobileRegex.test(mobile)) {
//         mobileInput.classList.remove("error_footer");
//         mobileError.textContent = "";
//         return true;
//     } else {
//         mobileInput.classList.add("error_footer");
//         mobileError.textContent = "Please enter a valid mobile number";
//         return false;
//     }
// }

// function redirectToThankYouPage() {
//     window.location.href = 'thankyou.html';
// }

function submitFormFooter(event) {
  event.preventDefault();

  const name = document.getElementById("form_name_footer").value;
  const email = document.getElementById("form_email_footer").value;
  const number = document.getElementById("form_number_footer").value;
  const collegename = document.getElementById("form_college_footer").value;
  const passedout = document.getElementById("form_passedoutyear_footer").value;
  const branch = document.getElementById("form_branch_footer").value;
  const course = document.getElementById("form_course_footer").value;
  const program = document.getElementById("form_program_footer").value;
  const howDoYouKnow = document.getElementById(
    "form_howdoyouknow_footer"
  ).value;

  // Perform validation checks
  const isNameValid = name.trim() !== "";
  const isEmailValid = validateEmail_footer();
  const isNumberValid = validateMobile_footer();
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
    leadCollegeName: collegename,
    leadPassedout: passedout,
    leadBranch: branch,
    leadCourse: course,
    leadProgram: program,
    leadHowDoYouKnow: howDoYouKnow,
    leadLandingSource: "skillcentral-dataAnalyticsLandingPage-Footer",
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
      document.getElementById("contact-form_footer").reset();
      downloadPDF(); // Download PDF after successful form submission
      redirectToThankYouPage(); // Redirect after successful form submission
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function validateEmail_footer() {
  var email = document.getElementById("form_email_footer").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var emailInput = document.getElementById("form_email_footer");
  var emailError = document.getElementById("email_error_footer");

  if (emailRegex.test(email)) {
    emailInput.classList.remove("error_footer");
    emailError.textContent = "";
    return true;
  } else {
    emailInput.classList.add("error_footer");
    emailError.textContent = "Please enter a valid email";
    return false;
  }
}

function validateMobile_footer() {
  var mobile = document.getElementById("form_number_footer").value;
  var mobileRegex = /^[6-9]\d{9}$/;
  var mobileInput = document.getElementById("form_number_footer");
  var mobileError = document.getElementById("mobile_error_footer");

  // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
  if (mobileRegex.test(mobile)) {
    mobileInput.classList.remove("error_footer");
    mobileError.textContent = "";
    return true;
  } else {
    mobileInput.classList.add("error_footer");
    mobileError.textContent = "Please enter a valid mobile number";
    return false;
  }
}

function downloadPDF() {
  let pdfUrl = "";
  let fileName = "";

  const currentUrl = window.location.href;

  if (currentUrl.includes("fullstack-internship")) {
    pdfUrl = "assets/Brochure/SkillCentral - Full Stack Brochure.pdf";
    fileName = "SkillCentral - Full Stack Brochure.pdf";
  } else if (currentUrl.includes("dataanalytics-internship")) {
    pdfUrl = "assets/Brochure/SkillCentral Data Analyst Brochure.pdf";
    fileName = "SkillCentral - Data Analytics Brochure.pdf";
  } else if (currentUrl.includes("digitalmarketing-internship")) {
    pdfUrl = "assets/Brochure/SkillCentral Data Analyst Brochure.pdf";
    fileName = "SkillCentral - Data Analytics Brochure.pdf";
  } else if (currentUrl.includes("machinelearning-internship")) {
    pdfUrl = "assets/Brochure/SkillCentral Data Analyst Brochure.pdf";
    fileName = "SkillCentral - Data Analytics Brochure.pdf";
  } else {
    // Default brochure or handle other cases
    pdfUrl = "assets/Brochure/SkillCentral - Full Stack Brochure.pdf";
    fileName = "SkillCentral - Full Stack Brochure.pdf";
  }

  if (pdfUrl) {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  } else {
    console.error("No matching brochure found for this URL");
  }
}

function redirectToThankYouPage() {
  window.location.href = "thankyou.html";
}

// function handleFormSubmissionNewsLetter(event) {
//     event.preventDefault(); // Prevent default form submission

//     const emailInput = document.getElementById('email-input');

//     // Perform email validation
//     if (validateEmailNewsLetter(emailInput.value)) {
//         emailInput.classList.remove('error');

//         // If email is valid, send data to API and download the PDF
//         submitDataAndDownloadPDF(emailInput.value);
//     } else {
//         emailInput.classList.add('error');
//     }
// }

// function validateEmailNewsLetter(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     return emailRegex.test(email);
// }

// function submitDataAndDownloadPDF(email) {
//     const requestData = {
//         leadFirstName: 'Newsletter Subscriber',
//         leadEmail: email,
//         leadLandingSource: "dataAnalytics-newsletter-signup"
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
//             downloadPDFNewsLetter(); // Download the PDF after successful form submission
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// function downloadPDFNewsLetter() {
//     const pdfUrl = 'assets/Brochure/SkillCentral Data Analyst Brochure.pdf';
//     const fileName = 'SkillCentral Data Analyst Brochure.pdf';

//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = fileName;
//     link.click();
// }

function handleFormSubmissionNewsLetter(event) {
  event.preventDefault(); // Prevent default form submission

  const emailInput = document.getElementById("email-input");

  // Perform email validation
  if (validateEmailNewsLetter(emailInput.value)) {
    emailInput.classList.remove("error");

    // If email is valid, send data to API and download the PDF
    submitDataAndDownloadPDF(emailInput.value);

    // Reset the input field
    emailInput.value = "";
  } else {
    emailInput.classList.add("error");
  }
}

function validateEmailNewsLetter(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}

function submitDataAndDownloadPDF(email) {
  const requestData = {
    leadFirstName: "Newsletter Subscriber",
    leadEmail: email,
    leadLandingSource: "DataAnalyst-newsletter-signup",
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
      downloadPDFNewsLetter();
      redirectToThankYouPage(); // Download the PDF after successful form submission
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function downloadPDFNewsLetter() {
  const pdfUrl = "assets/Brochure/SkillCentral Data Analyst Brochure.pdf";
  const fileName = "SkillCentral Data Analyst Brochure.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = fileName;
  link.click();
}
