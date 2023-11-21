function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }   

  function toggleInfoBox() {
   var infoBox = document.getElementById("info-box");
    infoBox.style.display = infoBox.style.display === "none" ? "block" : "none";
 }

 function closeInfoBox() {
    var infoBox = document.getElementById("info-box");
    infoBox.classList.add("hidden");
    console.log("Info box is now hidden.");
  }
  // Add the following functions for the arrow icon and close button
  function scrollToExperience() {
    document.getElementById("experience").scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  }
// script.js 
// project__2.js 
// Check if the user has a preference for dark mode using localStorage
const darkMode = localStorage.getItem("darkMode");

// If the user has a preference, set the class accordingly
if (darkMode === "enabled") {
    document.body.classList.toggle("dark-mode");
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user's preference for dark mode in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxbbU0cevD_ijdGG4N7DNWRWD5h5UuH7ct2i3jZyy4bAskfQCp7jrzUeSNx8kt5-d6J-g/exec'
const form = document.forms['submit-to-google-sheet']
const success=document.getElementById('success')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        success.innerHTML="data successfully submit";
        setTimeout(function()
        {
            success.innerHTML="";

        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
}) 
