var lineUp = function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var bouncerCount = 1;

  for (var i = 0; i < window.dancers.length; i++) {
    if ($(window.dancers[i]).hasClass('bouncyDancer')) {
      bouncerCount++;
    } 
  }
  var othersCount = window.dancers.length - bouncerCount - 1;
  var spaceForBouncers = width / bouncerCount;
  var spaceForOthers = width / othersCount;
  var newBouncerPos = width / bouncerCount;
  var othersPos = spaceForOthers;
  for (var j = 0; j < window.dancers.length; j++) {
    if ($(window.dancers[j]).hasClass('bouncyDancer')) {
      var newY = height - 40;
      $(window.dancers[j].css({top: newY, left: newBouncerPos }));
      newBouncerPos += spaceForBouncers;
    } else {
      $(window.dancers[j].css({top: 40, left: othersPos}));
      othersPos += spaceForOthers;
    }
  }
  
};

var backwardsFlip = function() {
  
};

