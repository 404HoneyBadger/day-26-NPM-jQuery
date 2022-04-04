$(document).ready(function () {
  $('#submit').on('click', function() {
    let name = $('#name'); //no .val()
    let email = $('#email');
    let phone = $('#phone');

    let required =[name, email, phone]; //no need to create a new array 

    for (let i = 0; i < required.length; i++) {
      if (required[i].val() == '') {
        $('#message').html('Please Fill Out Required Fields') //not htmlinner
          .addClass('warning'); //class warning from css sheet
        required[i].prev().addClass('warning'); //prev is previous sibling, which is the label. 
      } else {
        $('#message').removeClass('warning'); //when something is entered in input
        required[i].prev().removeClass('warning');
      }
    }
    if (!$('label').hasClass('warning')){  //! logical NOT, boolean
      $('#form').remove(); //# is id
      $('h2').html('Thanks for your Feedback!');
    }
  });
});
