var makeDancer = function(top, left, timeBetweenSteps) {
  
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(window.innerHeight * .75, window.innerWidth * .5 );
  var thisDancer = this;
  this.step = function() {
    setTimeout(thisDancer.step.bind(this), timeBetweenSteps);
  };
  this.step();
  
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    position: relative,
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};