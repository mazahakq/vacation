var declOfNum = function(number, titles)
{
    var  cases = [2, 0, 1, 1, 1, 2];
    return titles[
            (number % 100 > 4 && number % 100 < 20)
            ?
            2
            :
            cases[(number % 10 < 5) ? number % 10 : 5]
    ];
}

﻿function updateTimer() {
  future  = Date.parse("August 4, 2022 18:00:00");
  //future  = Date.parse("July 11, 2022 13:00:00");
  now     = new Date();
  diff    = future - now;

  years = Math.floor( diff / (1000*60*60*24*365) );
  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  y = years;
  d = days  - years * 365;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  dd = declOfNum(d, ['день', 'дня', 'дней']);
  hh = declOfNum(h, ['час', 'часа', 'часов']);
  mm = declOfNum(m, ['минута', 'минуты', 'минут']);
  ss = declOfNum(s, ['секунда', 'секунды', 'секунд']);

  if (years >= 0) {
  document.getElementById("timer")
    .innerHTML =
	  '<div><span>Отпуск через:</span></div>' +
      ' ' + d + '<span> '+ dd +'</span>' +
      ' ' + h + '<span> '+ hh +'</span>' +
      ' ' + m + '<span> '+ mm +'</span>' +
      '<div>' + s + '<span> '+ ss +'</span></div>' ;
  } else {
  document.getElementById("timer")
    .innerHTML =
          '<div><span>Отпуск начался!!!</span></div>';
  }
}
setInterval('updateTimer()', 500 );
