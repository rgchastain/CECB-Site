$(document).ready(function(){

	// Nav bar
	$(window).scroll(function() {
        if ($(window).scrollTop() > 10 || $(window).scrollTop() < -1) {
            $('.main_h').addClass('sticky');
        } else {
            $('.main_h').removeClass('sticky');
        }
    });

	// Mobile Navigation
    $('.mobiletoggle').click(function() {
        if ($('.main_h').hasClass('open-nav')) {
            $('.main_h').removeClass('open-nav');
        } else {
            $('.main_h').addClass('open-nav');
        }
    });


    $('.main_h li a').click(function() {
        if ($('.main_h').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
            $('.main_h').removeClass('open-nav');
        }
    });

});



// Map Functionality
    function initMap() {
        var uluru = {lat: 33.028013, lng: -96.735202};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }