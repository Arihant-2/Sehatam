
function sendEmail() {
    let message = document.getElementById("message").value;
    let subject = "New Message from Sehat Sangh";
    let recipientEmail = "example@example.com"; // Replace with your actual email

    let mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
}
