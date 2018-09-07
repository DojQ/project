

function clock() {
  let now = new Date();
  let day = now.getMonth();
  let hours = now.getHours();
  let minu = now.getMinutes();
  let sec = now.getSeconds();

  if (hours < 10) hours = "0" + hours;
  if (minu < 10) minu = "0" + minu;
  if (sec < 10) sec = "0" + sec;

  document.getElementById("clock").innerHTML = hours + ":" + minu + ":" + sec;
  setTimeout("clock()", 1000);
}



function date() {
  var dt = new Date();
  var month = dt.getMonth();
  var day = dt.getDate();
  var year = dt.getFullYear();

  document.getElementById("date").innerHTML += (month + 1 + '-' + day + '-' + year ) ;
clock();
}
date();


function waluta() {
  let type = prompt("podaj typ");
  let value = prompt("podaj wartosc");

  const EUR = 4.2296;
  const USD = 3.6060;
  const NOK = 0.4358;
  const CHF = 3.6313;
  const GBP = 4.7738;

  switch (type) {
    case 'EUR':
        document.getElementById("currency-answer").innerHTML =  value + "złotych to: " + ((value / CHF).toFixed(2) + " euro");
      break;
    case 'USD':
        document.getElementById("currency-answer").innerHTML = value + "złotych to: " + ((value / CHF).toFixed(2) + " dolarów");
      break;
    case 'NOK':
        document.getElementById("currency-answer").innerHTML = value + "złotych to: " +((value / CHF).toFixed(2) + " koron");
      break;
    case 'CHF':
        document.getElementById("currency-answer").innerHTML = value + "złotych to: " +((value / CHF).toFixed(2) + " franków");
      break;
    case 'GBP':
        document.getElementById("currency-answer").innerHTML = value + "złotych to: "+ ((value / CHF).toFixed(2) + " funtów");
      break;
    default:
        document.getElementById("currency-answer").innerHTML = ("wrong value ,pls try again");
      break;
  }
}
