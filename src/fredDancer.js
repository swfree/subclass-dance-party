var FredDancer = function() {
  AllenDancer.call(this, 0, 0, 2000);
  this.$node.attr('src', 'assets/freddyAnt.png');
  this.$node.removeClass('mainDancer');
  this.$node.addClass('fredDancer');
  this.$node.toggleClass('flipped');
  // var thisDancer = this;
  // this.step = function() {
  //   setTimeout(thisDancer.step.bind(this), 2000);
  //   this.$node.toggleClass('flipped');
  // };
  // thisDancer.step();
};

FredDancer.prototype = Object.create(AllenDancer.prototype);
FredDancer.prototype.constructor = FredDancer;