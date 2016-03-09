$(document).ready(function() {
  window.dancers = [];
  var allen = new AllenDancer();
  window.dancers.push(allen.$node);
  $('body').append(allen.$node);

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (dancerMakerFunctionName === 'lineUp') {
      lineUp();
    } else if (dancerMakerFunctionName === 'doseyDo') {
      doseyDo();
    } else {
      var dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer.$node);
    }
  });

  $(document).on('keydown', function (e) { //TODO: on spacebar keypress
    e.preventDefault();
    if (e.which === 37) { // left arrow
      var ourOffset = window.dancers[0].offset();
      if (ourOffset.left > 100) {
        ourOffset.left = ourOffset.left - 50;
        ourOffset.top = '50%';
        window.dancers[0].offset(ourOffset);
      }
    } else if (e.which === 39) { // right arrow
      var ourOffset = window.dancers[0].offset();
      if (ourOffset.left + 300 < window.innerWidth) {
        ourOffset.left = ourOffset.left + 50;
        ourOffset.top = '50%';
        window.dancers[0].offset(ourOffset);
      }
    } else if (e.which === 32) { // space bar
      $('.mainDancer').removeClass('flipped');
      $('.mainDancer').addClass('backflip'); 
      var allenDancer = $('.mainDancer');
      setTimeout(function() {
        $(allenDancer).removeClass('backflip'); 
      }, 1000);
    }
  });
  $('.trumpButton').on('click', function() {
    $('body').css('background-image', 'url(assets/trumpdancefloor.jpg)');
    $('.fredDancer').remove();
    $('.mainDancer').attr('src', 'assets/TrumpTRex.png');
    $('.mainDancer').addClass('theDonald');
    $('.danceMusic').attr('src', 'assets/trumpRemix.mp3');
    $('.slogan').toggle();
    $('.directions').text('Press Left and Right Arrows to Move Trump-Rex');
    $('.theDonald').on('mouseover', function () {
      $(this).height($(this).height() + 10);
      $(this).width($(this).width() + 10);
      $(this).offset({top: $(this).offset().top - 5, left: $(this).offset().left - 5});
    });
  });
});
