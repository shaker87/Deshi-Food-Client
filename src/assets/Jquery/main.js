    // log session iuput
    $(document).ready(function() {
    $('.input-style input').focus(function() {
        $('.input-style').removeClass('active')
        $(this).parents('.input-style').addClass('active')
     })
     $('.input-style input').blur(function() {
        $('.input-style').removeClass('active')
     })
 
 
     // Password visible system
     pwdVisibile('.pwd')
     pwdVisibile('.newpwd')
     pwdVisibile('.cpwd')
 
     function pwdVisibile(button) {
         let pwdEye = true
         $(button).click(function() {
             if(pwdEye) { // Password visible
                 $(this).prev().attr('type', 'text')
                 $(this).addClass('fa-eye')
                 $(this).removeClass('fa-eye-slash')
                 pwdEye = false
             } else { //Password hidden
                 $(this).prev().attr('type', 'password')
                 $(this).removeClass('fa-eye')
                 $(this).addClass('fa-eye-slash')
                 pwdEye = true
             }
             
         })
     }
    }