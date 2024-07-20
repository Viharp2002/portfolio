const sendMail = ()=>{
  Email.send({
    SecureToken: "3bdd5fd2-cd2a-4ccf-ad3d-fca65496987d",
    To : 'viharp2002@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body :  "Name: " + document.getElementById("name").value +
            "<br>" + "Message: " + document.getElementById("message").value
}).then(
  message => alert("Thanks for contacting me. I will reach you soon!")
);
}

$(document).ready(function () {
    $(window).scroll(function () {
      // Sticky navbar on scroll script
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // Scroll-up button show/hide script
      if ($(this).scrollTop() > 1600) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // Slide-up script
    $(".scroll-up-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  
    $(".navbar .menu li a").click(function () {
      // Applying smooth scroll on menu items click
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        800
      );
    });
  
    // Toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // Typing text animation script
    var typed = new Typed(".typing", {
      strings: [
        "Computer Engineer.",
        "Data Analyst",
        "MERN stack Developer.",
        "Competitive Coder.",
        "Lifelong Learner."
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed2 = new Typed(".typing-2", {
      strings: [
        "Active Listener", 
        "Organized Person", 
        "Techie Geek", 
        "Public Speaker."
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // Owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  