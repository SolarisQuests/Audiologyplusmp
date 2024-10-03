$(document).ready(function () {
    
  $("form").submit(function (event) {  
    // form consition start

   // alert($("#quiz-label-val").val()+'>>'+$("#quiz").val());

    if($("#quiz-label-val").val() != $("#quiz").val()){ // not success
      /* $("form").append(
            '<div class="alert alert-error">Captcha incorrect.</div>'
        ); */
        
        $("#error-msg").show();
        $("#error-msg").text('Captcha incorrect');
        event.preventDefault();
    } else {  // success


      var formData = {
        name: $("#name").val(),
        practice_name: $("#practice_name").val(),
        ph_number:$("#ph_number").val(),  
        email: $("#email").val(),  
        product_name:$("#product_name").val(), 
        tell_us:$("#tell_us").val(),
        to_email:$("#to_email").val(),
        domain:$("#domain").val()
      };

       $.ajax({
        type: "POST",
        url: "https://app.legaciestechno.com/common/get_data.php?type=contact_form_working",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
        if (data.success) {
          /*$("form").append(
              '<div class="alert alert-success">' + data.message + "</div>"
          ); */
          $("#error-msg").hide('');
          $("#simple-msg").show();
          $("#simple-msg").text(data.message);
         location.href="https://www.audiologyplus.com/contact-us.html";
        }
      });  

      event.preventDefault();

   }
  }); // form consition end
});