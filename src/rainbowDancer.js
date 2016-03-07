var makeRainbowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rainbowDancer');
  this.oldStep = this.step;
  this.step = function() {
    this.oldStep();
    //this.$node.toggle();
  };

};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;
