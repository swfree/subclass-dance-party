var makeDancer = function(top, left, timeBetweenSteps) {
  
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  var thisDancer = this;
  this.step = function() {
    setTimeout(thisDancer.step.bind(this), timeBetweenSteps);
  };
  this.step();
  
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};








