const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header= document.querySelector(".header");

const toggleNavbar =() =>{
    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener('click',() => toggleNavbar());



// use for slider

var images=["images/img-2.jpeg",
            "images/img3.jpeg",
            "images/pic1.jpg",
            "images/pic2.jpg" ] ;
    var i=0;
    function slides(){
        document.getElementById("slideimage").src=images[i];
        if(i<(images.length-1))//0<4
        i++;
        else
        i=0;
    }
    setInterval(slides,3000)

    //================= textarea section

//     function sendEmail(){
//         Email.send({
//     Host : "smtp.gmail.com",
//     Username : "2070083@kiit.ac.in",
//     Password : "Ajay156@",
//     To : 'ajaybaaba2@gmail.com',
//     From : document.getElementById("email").value,
   
//     Subject : "New contcat Form Enquiry",
   
//     Body : "name: "+document.getElementById("name").value

//     +"<br> email: "+document.getElementById("email").value
    
//     +"<br> subject: " +document.getElementById("subject").value
    
//     +"<br> message: " +document.getElementById("message").value
// }).then(
//   message => alert("message Sent successfully")
// );
//     }
    