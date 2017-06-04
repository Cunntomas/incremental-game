$(document).ready(function(){
  var clickValue  = 1;
  var lvlCost     = 10;
  var woodAmount  = 0,
  stoneAmount = 0,
  goldAmount  = 0;


// PREVENT ENTER KEY SUBMITING
$('button').keypress(function(e){
  if(e.keyCode === 13){
    e.preventDefault();
  }
});

// CLICK LVL SYSTEM
$('#clicklvl').click(function(){
  if($('#goldAmount').val() >= lvlCost){
    goldAmount -= lvlCost;
    lvlCost *= 2;
    clickValue += 1;
  }
  $('#clicklevel').val(clickValue);
  $('#clicklvl').html('Clicks lvl up! ' + lvlCost + ' Gold');
});


// HOUSE SYSTEM (WORKERS REQUERIMENT)
var house = {gold:10, capacity:4};
var houseOwned = 0;

$('#addHouse').click(function(){
  if(house.gold <= goldAmount){
    houseOwned += 1;
    goldAmount -= house.gold;
    house.gold *= 2;
  }
  $('#houses').val(houseOwned)
})

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



// WORKERS SYSTEM (IDLE GATHERING)



});
