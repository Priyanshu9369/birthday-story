/* =====================================================
   PAGE LOAD HANDLING
   ===================================================== */

// Hide loading screen and show main content after page loads
$(window).load(function () {
  $('.loading').fadeOut('fast');     // Hide loader
  $('.container').fadeIn('fast');    // Show main content
});

/* =====================================================
   DOCUMENT READY
   ===================================================== */

$('document').ready(function () {

  var vw; // Variable to store half viewport width

  /* -------------------------------------------------
     WINDOW RESIZE HANDLER
     Repositions balloons on resize
     ------------------------------------------------- */
  $(window).resize(function () {
    vw = $(window).width() / 2;

    // Stop ongoing balloon animations
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();

    // Re-align balloons in a straight line
    $('#b11').animate({ top: 240, left: vw - 350 }, 500);
    $('#b22').animate({ top: 240, left: vw - 250 }, 500);
    $('#b33').animate({ top: 240, left: vw - 150 }, 500);
    $('#b44').animate({ top: 240, left: vw - 50 }, 500);
    $('#b55').animate({ top: 240, left: vw + 50 }, 500);
    $('#b66').animate({ top: 240, left: vw + 150 }, 500);
    $('#b77').animate({ top: 240, left: vw + 250 }, 500);
  });

  /* =====================================================
     STEP 1: TURN ON LIGHTS
     ===================================================== */
  $('#turn_on').click(function () {
    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');

    $('body').addClass('peach'); // Change background

    // Show next button
    $(this).fadeOut('slow').delay(5000).promise().done(function () {
      $('#play').fadeIn('slow');
    });
  });

  /* =====================================================
     STEP 2: PLAY MUSIC
     ===================================================== */
  $('#play').click(function () {
    var audio = $('.song')[0];
    audio.play(); // Play birthday song

    // Change bulb glow style
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
    $('#bulb_red').addClass('bulb-glow-red-after');
    $('#bulb_blue').addClass('bulb-glow-blue-after');
    $('#bulb_green').addClass('bulb-glow-green-after');
    $('#bulb_pink').addClass('bulb-glow-pink-after');
    $('#bulb_orange').addClass('bulb-glow-orange-after');

    $('body').addClass('peach-after');

    $(this).fadeOut('slow').delay(6000).promise().done(function () {
      $('#bannar_coming').fadeIn('slow');
    });
  });

  /* =====================================================
     STEP 3: SHOW BANNER
     ===================================================== */
  $('#bannar_coming').click(function () {
    $('.bannar').addClass('bannar-come');

    $(this).fadeOut('slow').delay(6000).promise().done(function () {
      $('#balloons_flying').fadeIn('slow');
    });
  });

  /* =====================================================
     BALLOON FLOATING LOOPS
     ===================================================== */

  function loopOne() {
    $('#b1').animate({ left: 1000 * Math.random(), bottom: 500 * Math.random() }, 10000, loopOne);
  }
  function loopTwo() {
    $('#b2').animate({ left: 1000 * Math.random(), bottom: 500 * Math.random() }, 10000, loopTwo);
  }
  function loopThree() {
    $('#b3').animate({ left: 1000 * Math.random(), bottom: 500 * Math.random() }, 10000, loopThree);
  }
  function loopFour() {
    $('#b4').animate({ left: 1000 * Math.random(), bottom: 500 * Math.random() }, 10000, loopFour);
  }
  function loopFive() {
    $('#b5').animate({ left: 1000 * Math.random(), bottom: 500 * Math.random() }, 10000, loopFive);
  }
  function loopSix() {
    $('#b6').animate({ left: 1000 * Math.random(), bottom: 500 * Math.random() }, 10000, loopSix);
  }
  function loopSeven() {
    $('#b7').animate({ left: 1000 * Math.random(), bottom: 500 * Math.random() }, 10000, loopSeven);
  }

  /* =====================================================
     STEP 4: BALLOONS FLY
     ===================================================== */
  $('#balloons_flying').click(function () {
    $('.balloon-border').animate({ top: -500 }, 8000);

    // Add rotation styles
    $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

    // Start floating animations
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();

    $(this).fadeOut('slow').delay(5000).promise().done(function () {
      $('#cake_fadein').fadeIn('slow');
    });
  });

  /* =====================================================
     STEP 5: SHOW CAKE
     ===================================================== */
  $('#cake_fadein').click(function () {
    $('.cake').fadeIn('slow');

    $(this).fadeOut('slow').delay(3000).promise().done(function () {
      $('#light_candle').fadeIn('slow');
    });
  });

  /* =====================================================
     STEP 6: LIGHT CANDLE
     ===================================================== */
  $('#light_candle').click(function () {
    $('.fuego').fadeIn('slow');

    $(this).fadeOut('slow').promise().done(function () {
      $('#wish_message').fadeIn('slow');
    });
  });

  /* =====================================================
     STEP 7: BIRTHDAY MESSAGE ALIGNMENT
     ===================================================== */
  $('#wish_message').click(function () {
    vw = $(window).width() / 2;

    // Stop and rename balloons for alignment
    $('#b1').attr('id', 'b11');
    $('#b2').attr('id', 'b22');
    $('#b3').attr('id', 'b33');
    $('#b4').attr('id', 'b44');
    $('#b5').attr('id', 'b55');
    $('#b6').attr('id', 'b66');
    $('#b7').attr('id', 'b77');

    // Position balloons to form text
    $('#b11').animate({ top: 240, left: vw - 350 }, 500);
    $('#b22').animate({ top: 240, left: vw - 250 }, 500);
    $('#b33').animate({ top: 240, left: vw - 150 }, 500);
    $('#b44').animate({ top: 240, left: vw - 50 }, 500);
    $('#b55').animate({ top: 240, left: vw + 50 }, 500);
    $('#b66').animate({ top: 240, left: vw + 150 }, 500);
    $('#b77').animate({ top: 240, left: vw + 250 }, 500);

    $('.balloons').css('opacity', '0.9');
    $('.balloons h2').fadeIn(3000);

    $(this).fadeOut('slow').delay(3000).promise().done(function () {
      $('#story').fadeIn('slow');
    });
  });

  /* =====================================================
     STEP 8: STORY MESSAGE FLOW
     ===================================================== */
  $('#story').click(function () {
    $(this).fadeOut('slow');

    $('.cake').fadeOut('fast').promise().done(function () {
      $('.message').fadeIn('slow');
    });

    // Recursive message animation
    function msgLoop(i) {
      $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
        i++;
        $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);

        if (i === 50) {
          $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
            $('.cake').fadeIn('fast');
          });
        } else {
          msgLoop(i);
        }
      });
    }

    msgLoop(0);
  });

});
