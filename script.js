const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


// location
const x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}


// local storage
const form = document.getElementById("myForm");

// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Load form data from localStorage if available
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const contactInput = document.getElementById("contact");
    const messageInput = document.getElementById("message");

    if (localStorage.getItem("formData")) {
        const formData = JSON.parse(localStorage.getItem("formData"));
        nameInput.value = formData.name || "";
        emailInput.value = formData.email || "";
        contactInput.value = formData.contact || "";
        messageInput.value = formData.message || "";
    }

    // Save form data to localStorage on form submit
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            contact: contactInput.value,
            message: messageInput.value
        };

        localStorage.setItem("formData", JSON.stringify(formData));

        alert("Form data saved to local storage!");
    });
} else {
    alert("Sorry, your browser does not support local storage.");
}


// Drag
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
