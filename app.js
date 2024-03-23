(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chiranjivrao37@gmail.com",
    Password: "0A9F4C155DBC469512A70269F8E0C181C0C1",
    From: "chiranjivrao37@gmail.com",
    To: document.getElementById("email").value,
    Subject: "New Contact From Enquiry",
    Body:
      "Name : " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("subject").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent Succesfully"));
}
