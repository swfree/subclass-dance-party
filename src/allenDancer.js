var AllenDancer = function() {
  
  this.$node = $('<img src="assets/allenTRex.png" class="mainDancer"></img>');
  this.thisDancer = this;
  this.step = function() {
    setTimeout(this.thisDancer.step.bind(this), 2000);
    this.$node.toggleClass('flipped');
    this.moveLorR(this.thisDancer);
    this.check();
  };
  this.step();
};

AllenDancer.prototype.moveLorR = function(dancer) {
  this.moveList = ['L', 'R'];
  this.randMove = this.moveList[Math.floor(Math.random() * this.moveList.length)];
  console.log(this);
  //console.log(currentL);


  this.ourOffset = this.$node.offset();
  console.log(this.ourOffset);
  if (this.randMove === 'L' && this.ourOffset.left > 100) {
    this.ourOffset.left = this.ourOffset.left - 100;
    this.ourOffset.top = '50%';
    dancer.$node.offset(this.ourOffset);
  } 
  if (this.randMove === 'R' && this.ourOffset.left + 300 < window.innerWidth) {
    this.ourOffset.left = this.ourOffset.left + 100;
    this.ourOffset.top = '50%';
    dancer.$node.offset(this.ourOffset);
  } 
};

AllenDancer.prototype.check = function () {
  if (window.dancers.length > 1) {
    var allenOffset = window.dancers[0].offset();
    var fredOffset = window.dancers[1].offset();
    if (Math.abs(allenOffset.left - fredOffset.left) < 100) {
      window.dancers[0].addClass('backflip');
      window.dancers[1].addClass('backflip');
      window.dancers[0].removeClass('flipped');
      window.dancers[1].removeClass('flipped');
      setTimeout(function () {
        window.dancers[0].toggleClass('flipped');
        window.dancers[1].toggleClass('flipped');
        window.dancers[0].removeClass('backflip');
        window.dancers[1].removeClass('backflip');
      }, 3000);
    }
  }
};