var AllenDancer = function() {
  
  this.$node = $('<img src="assets/allenTRex.png" class="mainDancer"></img>');

  // this.$node.css("top", "500");
  // var yPos = window.innerHeight * .75;
  // var xPos = window.innerWidth * .5;
  //this.setPosition(500, 500);
  this.moves = ['backflip'];
  var thisDancer = this;
  this.step = function() {
    setTimeout(thisDancer.step.bind(this), 2000);
    this.$node.toggleClass('flipped');
    // this.$node.toggle Class('backflip');
  };
  this.step();
};

AllenDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
  
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

AllenDancer.prototype.moveRight = function () {
  // body...
};

AllenDancer.prototype.moveLeft = function () {
  // body...
};







