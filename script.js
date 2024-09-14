var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get elements and check if they exist
    var profilePictureElement = document.getElementById('--ProfilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (!profilePictureElement || !nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillsElement || !resumeOutputElement) {
        console.error('One or more input/output elements are missing');
        return;
    }
    // Type guard to ensure the elements are of the correct type
    if (!(nameElement instanceof HTMLInputElement) ||
        !(profilePictureElement instanceof HTMLInputElement) ||
        !(emailElement instanceof HTMLInputElement) ||
        !(phoneElement instanceof HTMLInputElement) ||
        !(educationElement instanceof HTMLTextAreaElement) ||
        !(experienceElement instanceof HTMLTextAreaElement) ||
        !(skillsElement instanceof HTMLTextAreaElement) ||
        !(resumeOutputElement instanceof HTMLElement)) {
        console.error('One or more elements are not of the expected type');
        return;
    }
    // Now it's safe to use the elements
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value;
    // Handle profile picture
    var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    // Create Resume Output
    var resumeOutput = "\n  <h2>Resume</h2>\n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profilePicture\" class=\"profilePicture\">") : "", "\n  <p><strong>Name:</strong> ").concat(name, " </p>\n  <p><strong>Email:</strong> ").concat(email, " </p>\n  <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n  \n  <h3>Education</h3>\n  <p>").concat(education, "</p>\n\n  <h3>Experience</h3>\n  <p>").concat(experience, "</p>\n\n  <h3>Skills</h3>\n  <p>").concat(skills, "</p>\n  ");
    resumeOutputElement.innerHTML = resumeOutput;
});
