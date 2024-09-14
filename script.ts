document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get elements and check if they exist
  const profilePictureElement = document.getElementById('--ProfilePicture');
  const nameElement = document.getElementById('name');
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const educationElement = document.getElementById('education');
  const experienceElement = document.getElementById('experience');
  const skillsElement = document.getElementById('skills');
  const resumeOutputElement = document.getElementById('resumeOutput');

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
  const name = nameElement.value;
  const email = emailElement.value;
  const phone = phoneElement.value;
  const education = educationElement.value;
  const experience = experienceElement.value;
  const skills = skillsElement.value;

  // Handle profile picture
  const profilePictureFile = profilePictureElement.files?.[0];
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

  // Create Resume Output
  const resumeOutput = `
  <h2>Resume</h2>
  ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profilePicture" class="profilePicture">` : "" }
  <p><strong>Name:</strong> ${name} </p>
  <p><strong>Email:</strong> ${email} </p>
  <p><strong>Phone Number:</strong> ${phone} </p>
  
  <h3>Education</h3>
  <p>${education}</p>

  <h3>Experience</h3>
  <p>${experience}</p>

  <h3>Skills</h3>
  <p>${skills}</p>
  `;

  resumeOutputElement.innerHTML = resumeOutput;
});
 