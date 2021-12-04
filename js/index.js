// i like console being here for now to make sure everything is going good : ) 

$(function(){
  $('#console-box').append('<br/>console is ready...');
  
  $('button').click(function(){
    $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
; 
  });
  
});

// works


var hours = 0;
var minutes = 0;
var seconds = 0;
var interval = null;

document.getElementById('hours').addEventListener('change', e => {
    hours = +e.target.value;
});

document.getElementById('minutes').addEventListener('change', e => {
    minutes = +e.target.value;
});

document.getElementById('seconds').addEventListener('change', e => {
    seconds = +e.target.value;
});

document.getElementById('startTimer').addEventListener('click', () => {
    var timeInSeconds = (hours * 60 * 60) +
        (minutes * 60) +
        seconds;
        


    var displayTime = () => {
        var displayHours = Math.floor(timeInSeconds / (60 * 60));
        var remainder = timeInSeconds - (displayHours * 60 * 60);
        var displayMinutes = Math.floor(remainder / 60);
        var displaySeconds = remainder - (displayMinutes * 60);
        document.getElementById("timer").innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds;
    };
    interval = setInterval(() => {
        displayTime();
        timeInSeconds -= 1;
        if (timeInSeconds < 0) {
            clearInterval(interval);
        }
    }, 1000);
});

// Works but is clunky because you have to click the 5 minute button for example then also press start not cool 

$('#addFive').click(function(){
  clearInterval(interval);
  minutes = 5;
});

$('#addThirty').click(function(){
  clearInterval(interval);
  minutes = 30;
});

$('#addTen').click(function(){
  clearInterval(interval);
  minutes = 10;
});

$('#stopTimer').click(function(){
  clearInterval(interval);
});