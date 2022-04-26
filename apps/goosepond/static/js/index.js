/* Javascript that runs as the page is loaded */
$(document).ready(function() {

    $(".goose").each(function() {
        var animationSpeed = getRandomArbitrary(15.0, 30.0)
        $(this).css("animation-duration", `${animationSpeed}s`)
    })

    // Make goose steal cursor when you click the cattails
    $("#reed-area").click(function() {
        $("#goose-game-goose").removeClass("idle")
        $("#goose-game-goose").addClass("run")
        $("html").addClass("hide-cursor")
        $("#reed-area").addClass("hide-cursor")
        $("#goose-game-honk")[0].play()
        setTimeout(function() {
            window.location.href = "https://goose.game"
        }, 4200);

    });

});

