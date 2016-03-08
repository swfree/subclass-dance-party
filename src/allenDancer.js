var AllenDancer = function() {
  
  this.$node = $('<img src="assets/allenTRex.png" class="mainDancer"></img>');
  var thisDancer = this;
  this.step = function() {
    setTimeout(thisDancer.step.bind(this), 2000);
    this.$node.toggleClass('flipped');
  };
  this.step();
};