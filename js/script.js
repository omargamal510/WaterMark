$(document).ready(function(){
    $('.one input').change(function () {
      $('.one p').text(this.files.length + " file(s) selected");
    });
  });


  $(document).ready(function(){
    $('.two input').change(function () {
      $('.two p').text(this.files.length + " file(s) selected");
    });
  });