var date = moment();
$('#current-time').text(date.format("dddd, MMMM Do YYYY, h:mma")); //This displays the time in the header

$( function() {
    $( "#datepicker" ).datepicker();
  } );

