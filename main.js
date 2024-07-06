function loadResume() {
    const resumeContainer = document.getElementById('resume');

    // Use Fetch API to load the content from resume.html
    fetch('resume.html')
        .then(response => response.text())
        .then(data => {
            resumeContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading resume:', error);
        });
}

// Get a reference to the link element by its ID
const resumeLink = document.getElementById('resume');

// Add a click event listener to the link
resumeLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of following the link
    loadResume(); // Call the function to load the resume content
});
