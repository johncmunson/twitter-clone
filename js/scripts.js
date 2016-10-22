$(document).ready(function(){

    var charCount = $('#char-count');
    var tweet = $('.tweet-compose');

    // TWEET MODULE

    // Tweet button and char count shown on text field focus
    tweet.on('focusin', function() {
        $('#tweet-controls').show();
        $(this).css('height', '6em');
    })

    // Update #char-count
    function updateCharCount() {
        charCount.html(140 - tweet.val().length);
        var count = 140 - tweet.val().length;
        colorRed(count);
    }

    // Change color to red when <= 10
    function colorRed(val) {
        if (val <= 10) {
            charCount.css('color', 'red');
        }
        if (val > 10) {
            charCount.css('color', 'black');
        }
    }

    // Event Listener on text field that calls updateCharCount
    $('.tweet-compose').on('keyup', updateCharCount);






    // Char count turn red when <= 10

    // Tweet button adds tweet to feed on click and resets text field

    // Text field expands on focus

    // Maximum of 140 chars in text field


    // TWITTER FEED

    // Tweet actions appear on hover

    // Tweets are minimized by default

    // Tweets expand on click

    // Tweets minimize on defocus


});