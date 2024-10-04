// // // function submitPopForm() {
// // //     const name = document.getElementById('form_name1').value;
// // //     const email = document.getElementById('form_email1').value;
// // //     const number = document.getElementById('form_number1').value;

// // //     // Perform validation checks
// // //     const isNameValid = name.trim() !== '';
// // //     const isEmailValid = validateEmail();
// // //     const isNumberValid = validateMobile();

// // //     // Check if all fields are valid
// // //     if (!(isNameValid && isEmailValid && isNumberValid )) {
// // //         alert('Please fill in all fields correctly.');
// // //         return; // Prevent form submission if any field is invalid
// // //     }

// // //     // If all fields are valid, proceed with form submission
// // //     const requestData = {
// // //         leadFirstName: name,
// // //         leadEmail: email,
// // //         leadMobileNumber: number,

// // //         leadLandingSource: "skillcentral-fsdCoursePage"
// // //     };

// // //     const apiUrl = "https://crmbackend.websoc.ai/content-manager/collection-types/application::lead.lead";

// // //     const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcxODM2MjkwNSwiZXhwIjoxNzIwOTU0OTA1fQ.MMH0QQMZD-CUyDP6ss7RLQpsZ1e-6rrNXhuvVXlWmX4";

// // //     const fetchOptions = {
// // //         method: 'POST',
// // //         headers: {
// // //             'Authorization': `Bearer ${bearerToken}`,
// // //             'Content-Type': 'application/json'
// // //         },
// // //         body: JSON.stringify(requestData)
// // //     };

// // //     fetch(apiUrl, fetchOptions)
// // //         .then(response => {
// // //             if (!response.ok) {
// // //                 throw new Error('Network response was not ok');
// // //             }
// // //             return response.json();
// // //         })
// // //         .then(data => {
// // //             console.log('Response:', data);
// // //             document.getElementById('contact-form').reset();
// // //             redirectToThankYouPage(); // Redirect after successful form submission
// // //         })
// // //         .catch(error => {
// // //             console.error('There was a problem with the fetch operation:', error);
// // //         });
// // // }

// // //   function validateEmail() {
// // //     var email = document.getElementById("form_email1").value;
// // //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// // //     var emailInput = document.getElementById("form_email1");
// // //     var emailError = document.getElementById("email_error1");

// // //     if (emailRegex.test(email)) {
// // //         emailInput.classList.remove("error");
// // //         emailError.textContent = "";
// // //         return true;
// // //     } else {
// // //         emailInput.classList.add("error");
// // //         emailError.textContent = "Please enter a valid email";
// // //         return false;
// // //     }
// // //   }

// // //   function validateMobile() {
// // //     var mobile = document.getElementById("form_number").value;
// // //     var mobileRegex = /^[6-9]\d{9}$/;
// // //     var mobileInput = document.getElementById("form_number");
// // //     var mobileError = document.getElementById("mobile_error");

// // //     // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
// // //     if (mobileRegex.test(mobile)) {
// // //         mobileInput.classList.remove("error");
// // //         mobileError.textContent = "";
// // //         return true;
// // //     } else {
// // //         mobileInput.classList.add("error");
// // //         mobileError.textContent = "Please enter a valid mobile number";
// // //         return false;
// // //     }
// // //   }

// // //   function redirectToThankYouPage() {

// // //     alert("hiiiiiiiii")

// // //     window.location.href = 'thankyou.html';

// // //   }

// // function submitPopForm(event) {
// //     event.preventDefault();
// //     console.log("hi delip") // Prevent default form submission

// //     const name = document.getElementById('Popup_form_fullname').value;
// //     const email = document.getElementById('Popup_form_mail').value;
// //     const number = document.getElementById('Popup_form_number').value;

// //     // Perform validation checks
// //     // const isNameValid = name.trim() !== '';
// //     // const isEmailValid = validateEmail();
// //     // const isNumberValid = validateMobile();

// //     // Check if all fields are valid
// //     if (!(isNameValid && isEmailValid && isNumberValid)) {
// //         alert('Please fill in all fields correctly.');
// //         return; // Prevent form submission if any field is invalid
// //     }

// //     // If all fields are valid, proceed with form submission
// //     const requestData = {
// //         leadFirstName: name,
// //         leadEmail: email,
// //         leadMobileNumber: number,
// //         leadLandingSource: "skillcentral-fsdCoursePage"
// //     };

// //     const apiUrl = "https://crmbackend.websoc.ai/content-manager/collection-types/application::lead.lead";
// //     const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcxODM2MjkwNSwiZXhwIjoxNzIwOTU0OTA1fQ.MMH0QQMZD-CUyDP6ss7RLQpsZ1e-6rrNXhuvVXlWmX4";

// //     const fetchOptions = {
// //         method: 'POST',
// //         headers: {
// //             'Authorization': `Bearer ${bearerToken}`,
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(requestData)
// //     };

// //     fetch(apiUrl, fetchOptions)
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw new Error('Network response was not ok');
// //             }
// //             return response.json();
// //         })
// //         .then(data => {
// //             console.log('Response:', data);
// //             document.getElementById('popup_contact-form').reset();
// //             redirectToThankYouPage(); // Redirect after successful form submission
// //         })
// //         .catch(error => {
// //             console.error('There was a problem with the fetch operation:', error);
// //         });
// // }

// // function validateEmail() {
// //     var email = document.getElementById("Popup_form_mail").value;
// //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// //     var emailInput = document.getElementById("Popup_form_mail");
// //     var emailError = document.getElementById("email_errorr");

// //     if (emailRegex.test(email)) {
// //         emailInput.classList.remove("error");
// //         emailError.textContent = "";
// //         return true;
// //     } else {
// //         emailInput.classList.add("error");
// //         emailError.textContent = "Please enter a valid email";
// //         return false;
// //     }
// // }

// // function validateMobile() {
// //     var mobile = document.getElementById("Popup_form_number").value;
// //     var mobileRegex = /^[6-9]\d{9}$/;
// //     var mobileInput = document.getElementById("Popup_form_number");
// //     var mobileError = document.getElementById("mobile_errorr");

// //     // Check if the mobile number has exactly 10 digits and starts with a number between 6 and 9
// //     if (mobileRegex.test(mobile)) {
// //         mobileInput.classList.remove("error");
// //         mobileError.textContent = "";
// //         return true;
// //     } else {
// //         mobileInput.classList.add("error");
// //         mobileError.textContent = "Please enter a valid mobile number";
// //         return false;
// //     }
// // }

// // function redirectToThankYouPage() {
// //     window.location.href = 'thankyou.html';
// // }

// function submitPopForm(event) {
//     event.preventDefault(); // Prevent default form submission

//     const name = document.getElementById('Popup_form_fullname').value;
//     const email = document.getElementById('Popup_form_mail').value;
//     const number = document.getElementById('Popup_form_number').value;

//     // Create the data object to be sent to the API
//     const requestData = {
//         leadFirstName: name,
//         leadEmail: email,
//         leadMobileNumber: number,
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
//             document.getElementById('popup_contact-form').reset();
//             redirectToThankYouPage(); // Redirect after successful form submission
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// function redirectToThankYouPage() {
//     window.location.href = 'thankyou.html';
// }

function submitPopForm(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("Popup_form_fullname").value;
  const email = document.getElementById("Popup_form_mail").value;
  const number = document.getElementById("Popup_form_number").value;

  // Perform validation checks
  const isNameValid = validateName1(name);
  const isEmailValid = validateEmail1(email);
  const isNumberValid = validateMobile1(number);

  // Check if all fields are valid
  if (!(isNameValid && isEmailValid && isNumberValid)) {
    alert("Please fill in all fields correctly.");
    return; // Prevent form submission if any field is invalid
  }

  // Create the data object to be sent to the API
  const requestData = {
    leadFirstName: name,
    leadEmail: email,
    leadMobileNumber: number,
    leadLandingSource: "skillCentral-popupForm",
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
      document.getElementById("popup_contact-form").reset();

      downloadPDF();
      redirectToThankYouPage(); // Redirect after successful form submission
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function validateName1(name) {
  if (name.trim() === "") {
    alert("Name is required.");
    return false;
  }
  return true;
}

function validateEmail1(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

function validateMobile1(number) {
  var mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(number)) {
    alert(
      "Please enter a valid mobile number. It should start with 6-9 and have exactly 10 digits."
    );
    return false;
  }
  return true;
}

// function downloadPDF() {
//     const pdfUrl = 'assets/Brochure/SkillCentral - Full Stack Brochure.pdf'; // Replace with the actual URL of your PDF
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = 'SkillCentral - Full Stack Brochure.pdf'; // Replace with the desired PDF file name
//     link.click();
// }

function downloadPDF() {
  let pdfUrl = "";
  let fileName = "";

  const currentUrl = window.location.href;

  if (currentUrl.includes("fullstack-internship")) {
    pdfUrl = "assets/Brochure/SkillCentral - Full Stack Brochure.pdf";
    fileName = "SkillCentral - Full Stack Brochure.pdf";
  } else if (
    currentUrl.includes(
      "best-data-analytics-training-intership-program-hyderabad"
    ) ||
    currentUrl.includes("best-data-analytics")
  ) {
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
