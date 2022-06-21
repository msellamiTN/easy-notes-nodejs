$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        title: $("#title").val(),
        content: $("#content").val()
        
      };
      //alert(formData);
      $.ajax({
        type: "POST", //POST GET PUT DELETE
        url: "http://localhost:8080/notes",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
        $('#message').text("Ajout avec succès");  
      });
  
      event.preventDefault();
    });
  });