document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get elements and check if they exist
  const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const linkedinElement = document.getElementById('linkedin') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
  const projectsElement = document.getElementById('projects') as HTMLTextAreaElement;
  const certificationsElement = document.getElementById('certifications') as HTMLTextAreaElement;
  const languagesElement = document.getElementById('languages') as HTMLTextAreaElement;
  const resumeOutputElement = document.getElementById('resumeOutput');

  if (!resumeOutputElement) {
      console.error('Resume output element is missing');
      return;
  }

  // Get values from the form
  const name = nameElement.value;
  const email = emailElement.value;
  const phone = phoneElement.value;
  const linkedin = linkedinElement.value;
  const skills = skillsElement.value;
  const projects = projectsElement.value;
  const certifications = certificationsElement.value;
  const languages = languagesElement.value;

  // Handle profile picture
  const profilePictureFile = profilePictureElement.files?.[0];
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

  // Create Resume Output
  let resumeOutput = `<h2>Resume</h2>`;
  if (profilePictureURL) {
      resumeOutput += `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`;
  }
  resumeOutput += `
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>

  <h3>Skills</h3>
  <p>${skills}</p>
  `;

  // Add optional fields if filled
  if (projects) {
      resumeOutput += `<h3>Projects</h3><p>${projects}</p>`;
  }
  if (certifications) {
      resumeOutput += `<h3>Certifications</h3><p>${certifications}</p>`;
  }
  if (languages) {
      resumeOutput += `<h3>Languages</h3><p>${languages}</p>`;
  }

  resumeOutputElement.innerHTML = resumeOutput;
});
