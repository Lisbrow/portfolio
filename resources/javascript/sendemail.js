function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var recipient = "l.brown91910@gmail.com";
    var subject = "Message from " + name;
    var body = "Sender's Name: " + name + "\nSender's Email: " + email + "\n\nMessage:\n" + message;

    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;

    // Show thank you message
    document.getElementById("thank-you-message").style.display = "block";
}