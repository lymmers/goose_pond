/* Javascript that runs as the page is loaded */
$(document).ready(function() {

    $(".goose").each(function() {
        var animationSpeed = getRandomArbitrary(15.0, 30.0)
        $(this).css("animation-duration", `${animationSpeed}s`)
    })

});
