$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      var symptomStress = $(this).val();
      $('#stress-responses').append(symptomStress + "<br>");
    });
    $("#health-responses").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var symptomHealth = $(this).val();
      $('#health-responses').append(symptomHealth + "<br>");
    });


    $("#methods").show();
    $("input:checkbox[name= deal-methods]:checked").each(function(){
      var methods = $(this).val();
      $('#methods').append(methods + "<br>");
    });
    $('#stress_survey').hide();
  });
});
