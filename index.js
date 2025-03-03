document.getElementById("explore-btn").addEventListener("click", function() {
    alert("Thanks for exploring!");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        document.getElementById("form-status").textContent = "Please fill out all fields.";
        document.getElementById("form-status").style.color = "red";
    } else {
        document.getElementById("form-status").textContent = "Message sent successfully!";
        document.getElementById("form-status").style.color = "green";
        
        document.getElementById("contact-form").reset();
    }
});
