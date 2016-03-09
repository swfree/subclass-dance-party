var FredDancer = function() {
  AllenDancer.call(this, 200, 200, 2000);
  this.$node.attr('src', 'assets/freddyAnt.png');
  this.$node.removeClass('mainDancer');
  this.$node.addClass('fredDancer');
  this.$node.toggleClass('flipped');
  $(document).find('.fredButton').remove();
  
};

FredDancer.prototype = Object.create(AllenDancer.prototype);
FredDancer.prototype.constructor = FredDancer;