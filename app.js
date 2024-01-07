// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelectorAll('.main-content');

// function PageTransitions(){
//     //Button click active class
//     for (let i = 0; i < sectBtn.length; i++) {
//         sectBtn[i].addEventListener('click', function(){
//             let currentBtn = document.querySelectorAll('.active-btn')
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += 'active-btn';
//         })
//     }
//     //sections Active
//     allSections.addEventListener('click', (e) => {
//         const id = e.target.dataset.id;
//         if (id) {
//             //remove selected from other btns
//             sectBtns.forEach((btn)=> {
//                 btn.classList.remove('active')
//             })
//             e.target.classList.add('active')

//             //hide other sections
//             sections.forEach((section)=> {
//                 section.classList.remove('active')
//             })

//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }
//     })
// }
// PageTransitions();
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    // document.querySelector('.blog').addEventListener('click', () => {
    //     document.getElementById("blogs").classList.add()
    // })
})();

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chiranjivrao37@gmail.com",
        Password: "0A9F4C155DBC469512A70269F8E0C181C0C1",
        From : 'chiranjivrao37@gmail.com',
        To : document.getElementById("email").value,
        Subject : "New Contact From Enquiry" ,
        Body: "Name : " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("subject").value
            +"<br> Message: "+ document.getElementById("message").value,
    }).then(
      message => alert("Message Sent Succesfully")
    );
}