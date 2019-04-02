$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();

    var aCount = 0;
    var aCount2 = 0;
    var aCount3 =0;

    $("#stress-responses").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      aCount+=1;
      var symptomStress = $(this).val();
      $('#stress-responses').append(symptomStress + "<br>");
    });

    $("#health-responses").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      aCount2 += 1;
      var symptomHealth = $(this).val();
      $('#health-responses').append(symptomHealth + "<br>");
    });


    $("#methods").show();
    $("input:checkbox[name= deal-methods]:checked").each(function(){
      aCount3 += 1;
      var methods = $(this).val();
      $('#methods').append(methods + "<br>");
    });
      $('#stress_survey').hide();

    if( aCount >= 2){
      $("#ressourcehidden").show();
    }
    if( aCount2 > 2){
      $("#ressourcehidden2").show();
    }
    if( aCount3 > 3){
      $("#ressourcehidden3").show();
    }

  });
});
