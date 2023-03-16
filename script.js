    // scroll to top button
    let mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {mybutton.style.display = "block";} 
      else { mybutton.style.display = "none";} }
    var scrollToTopBtn = document.getElementById("scrollToTopBtn")
    var rootElement = document.documentElement
    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })}
      
    // change by chose
    function getColor(){
        document.getElementById('rcolor').innerHTML=("Rose Color: "+form.color[form.color.selectedIndex].text);
        document.getElementById('bcolor').innerHTML=("Base Color: "+form.base[form.base.selectedIndex].text);
        if(form.base.selectedIndex == 0){showSlides(slideIndex = form.color.selectedIndex*2+1);}
        else{showSlides(slideIndex = form.color.selectedIndex*2+2); } }

    // sidebar
    function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}
    function closeNav() {
         document.getElementById("mySidenav").style.width = "0";
         document.body.style.backgroundColor = "white";}

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  $('.nav_btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
     document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  });

  $('.filter_btn').click(function(){
    $(this).toggleClass("click");
    $('.filterbar').toggleClass("show");
     document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  });
  
  $('.close_btn').click(function(){
     document.body.style.backgroundColor = "rgba(255,255,255,1)";
  })
    $('.women-btn').click(function(){
      $('nav ul .women-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.men-btn').click(function(){
      $('nav ul .men-show').toggleClass("show");
      $('nav ul .second').toggleClass("rotate");
    });
    $('.accessories-btn').click(function(){
      $('nav ul .accessories-show').toggleClass("show");
      $('nav ul .third').toggleClass("rotate");
    });
    $('.beauty-btn').click(function(){
      $('nav ul .beauty-show').toggleClass("show");
      $('nav ul .fourth').toggleClass("rotate");
    });
    $('.rewards-btn').click(function(){
      $('nav ul .rewards-show').toggleClass("show");
      $('nav ul .fifth').toggleClass("rotate");
    });
    $('.rewards2-btn').click(function(){
      $('nav ul .rewards2-show').toggleClass("show");
      $('nav ul .fifth').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
    
    $('.color-btn').click(function(){
      $('nav ul .color-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
      document.body.style.height = "200px";
    });
    $('.size-btn').click(function(){
      $('nav ul .size-show').toggleClass("show");
      $('nav ul .second').toggleClass("rotate");
    });
    $('.product_type-btn').click(function(){
      $('nav ul .product_type-show').toggleClass("show");
      $('nav ul .third').toggleClass("rotate");
    });
    $('.fabric-btn').click(function(){
      $('nav ul .fabric-show').toggleClass("show");
      $('nav ul .fourth').toggleClass("rotate");
    });
    $('.support-btn').click(function(){
      $('nav ul .support-show').toggleClass("show");
      $('nav ul .fifth').toggleClass("rotate");
    });
    $('.length-btn').click(function(){
      $('nav ul .length-show').toggleClass("show");
      $('nav ul .sixth').toggleClass("rotate");
    });
    $('.just_dropped-btn').click(function(){
      $('nav ul .just_dropped-show').toggleClass("show");
      $('nav ul .seventh').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });

    $('.beige_btn').click(function(){
      $('.black_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.black_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.blue_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.black_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.brown_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.black_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.green_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.black_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.gray_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.black_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.pink_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.black_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.red_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.black_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.white_pants').toggleClass("hide");
    });
    $('.white_btn').click(function(){
      $('.beige_pants').toggleClass("hide");
      $('.black_pants').toggleClass("hide");
      $('.blue_pants').toggleClass("hide");
      $('.brown_pants').toggleClass("hide");
      $('.green_pants').toggleClass("hide");
      $('.gray_pants').toggleClass("hide");
      $('.pink_pants').toggleClass("hide");
      $('.red_pants').toggleClass("hide");
    });

    function getSort(){
      if(form.sort.selectedIndex == 1){
          $('.new').toggleClass("hide");
      }
      if(form.sort.selectedIndex == 4){
          $('.best_seller').toggleClass("hide");
      }
  }  