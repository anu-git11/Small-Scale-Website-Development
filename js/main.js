$(document)
    .ready(function () {
        // Initialize Tooltip carousel for images
        $("#myCarousel").carousel({interval: 5500});
        $('[data-toggle="tooltip"]').tooltip();
        // Added smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Used jQuery's animate() method to add smooth page scroll Used (900)
                // milliseconds for how long it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash)
                        .offset()
                        .top
                }, 1000, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    })
