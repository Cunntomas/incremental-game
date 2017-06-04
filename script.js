$(document).ready(function(){
  var clickValue  = 1;
  var woodAmount  = 0,
  stoneAmount = 0,
  goldAmount  = 0;


$('button').keypress(function(e){
  if(e.keyCode === 13){
    e.preventDefault();
  }
});

// CLICK LVL SYSTEM
$('#clicklvl').click(function(){
  if($('#goldAmount').val() >= 10){
    goldAmount -= 10;
    clickValue += 1;
  }
  $('#clicklevel').val(clickValue);
});


// RESOURCE GATHERING
$('button').click(function(){

  if(this.id == "wood")
  {
    woodAmount += clickValue;
  }
  else if(this.id == "stone")
  {
    stoneAmount += clickValue;
  }
  if(this.id == "gold"){
    goldAmount += clickValue;
  }
  $('#goldAmount').val(goldAmount);
  $('#stoneAmount').val(stoneAmount);
  $('#woodAmount').val(woodAmount);
});


});
