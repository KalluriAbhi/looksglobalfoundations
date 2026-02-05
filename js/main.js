
$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;


  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  if (document.getElementById("default-select")) {
    $('select').niceSelect();
  };

      

  $(document).ready(function () {

    $('html, body').hide();

    if (window.location.hash) {

      setTimeout(function () {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

          scrollTop: $(window.location.hash).offset().top - 62

        }, 1000)

      }, 0);

    }

    else {

      $('html, body').show();

    }

  });


  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })

  if ($('.owl-banner').length) {
    $('.owl-banner').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      dots: false,
      autoplay: true,
      nav: true,
      navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"]
    });
  }

  if ($('.owl-condition').length) {
    $('.owl-condition').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      dots: false,
      autoplay: true,
      nav: true,
      navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"]
    });
  }

  if ($('.owl-brand').length) {
    $('.owl-brand').owlCarousel({
      loop: true,
      margin: 30,
      items: 5,
      nav: false,
      dots: false,
      responsiveClass: true,
      autoplay: 2500,
      slideSpeed: 300,
      paginationSpeed: 500,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1224: {
          items: 5
        }
      }
    })
  }

  if ($('.owl-event').length) {
    $('.owl-event').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      dots: false,
      autoplay: true,
      nav: true,
      navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"]
    });
  }


  // Causes
  $(".skill_main").each(function () {
    $(this).waypoint(function () {
      var progressBar = $(".progress-bar");
      progressBar.each(function (indx) {
        $(this).css("width", $(this).attr("aria-valuenow") + "%")
      })
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'

      });
  });


  //  Start Google map 

  // When the window has finished loading create our google map below

  if (document.getElementById("map")) {

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
      };

      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
      });
    }
  }


  $(document).ready(function () {
    $('#mc_embed_signup').find('form').ajaxChimp();
  });








});
