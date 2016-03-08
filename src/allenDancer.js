var AllenDancer = function() {
  
  this.$node = $('<img src="assets/allenTRex.png" class="mainDancer"></img>');
  var yPos = window.innerHeight * .75;
  var xPos = window.innerWidth * .5;
  this.setPosition(yPos, xPos);
  var thisDancer = this;
  this.step = function() {
    setTimeout(thisDancer.step.bind(this), 2000);
    this.$node.toggleClass('flipped');
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








