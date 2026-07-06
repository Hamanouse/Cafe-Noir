// Dynamic Greeting
 
const greeting = document.getElementById("greeting");
 
if (greeting) {
 
    const hour = new Date().getHours();
 
    if (hour < 12) {
 
        greeting.innerHTML = "Good Morning!";
 
    }
 
    else if (hour < 18) {
 
        greeting.innerHTML = "Good Afternoon!";
 
    }
 
    else {
 
        greeting.innerHTML = "Good Evening!";
 
    }
 
}
 
 
// Button Message
 
function showMessage() {
 
    alert("Thank you for visiting Cafe Noir!");
 
}
 
 
// Contact Form Validation
 
function validateForm() {
 
    const name = document.getElementById("name").value.trim();
 
    const email = document.getElementById("email").value.trim();
 
    const message = document.getElementById("message").value.trim();
 
    if (name === "") {
 
        alert("Please enter your name.");
 
        return false;
 
    }
 
    if (email === "") {
 
        alert("Please enter your email.");
 
        return false;
 
    }
 
    if (message === "") {
 
        alert("Please enter a message.");
 
        return false;
 
    }
 
    alert("Message sent successfully!");
 
    return true;
 
}