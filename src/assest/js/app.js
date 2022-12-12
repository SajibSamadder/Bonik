$(document).ready(function () {
    $('.banner  .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 3000,
        items: 1,
        responsive: {
            0: {
                items: 1,
                autoplayTimeout: 4000,
                smartSpeed: 2000,
            },
            600: {
                items: 1,
                autoplayTimeout: 4000,
                smartSpeed: 2000,
            },
            1000: {
                items: 1,
                autoplayTimeout: 4000,
                smartSpeed: 2000,
            }
        }
    });
    $('.card_md_view .why_akash_card_wrapper.owl-carousel').owlCarousel({
        loop: true,
        autoplayTimeout: 3000,
        smartSpeed: 3000,
        items: 1,
    });
    $(".dropdown_active >a").on("click", function () {
        $(this.nextElementSibling).slideToggle(400)
        $(this).toggleClass("down_active")
    })
    $(".header .manu_bar").click(function () {
        $(".side_manu").addClass("side_manu_active")
    });
    $(".side_manu .manu_bar").click(function () {
        $(".side_manu").removeClass("side_manu_active")
    });
});
let header = document.querySelector(".header")
window.addEventListener("scroll", e => {
    if (window.scrollY > 200) {
        header.classList.add("hide")
    } else {
        header.classList.remove("hide")
        header.classList.remove("selep")
    }
    if (window.scrollY > 400) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
        if (window.scrollY > 200) {
            header.classList.add("selep")
        }
    }
})
$(window).load(function () {
    $("#quality").twentytwenty({
        default_offset_pct: 0.50, // How much of the before image is visible when the page loads
        orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
        before_label: '', // Set a custom before label
        after_label: '', // Set a custom after label
        no_overlay: true, //Do not show the overlay with before and after
        move_slider_on_hover: false, // Move slider on mouse hover?
        move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
        click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });
});
