const gooseNames = ["Honk Schrader", "Waddler White", "Goostavo Fring", "Jesse Honkman"];
var freshGooseHonks = [
    "HONK!", 
    "<i>*Stares at you blankly*</i>",
    "<i>*Attempts to bite you*</i>",
    "<i>*Looks around nervously*</i>",
    "H..Honk?",
    "HoooOOonk!",
    "Qua--- HONK!",
    "Honk honk",
    "<i>*Honks confidently*</i>",
    "<i>*Waddles around and knocks more stuff over*</i>"
];

var usedGooseHonks = [];

function getRandomHonk() {
    if (freshGooseHonks.length === 0) {
        freshGooseHonks = freshGooseHonks.concat(usedGooseHonks);
        freshGooseHonks = shuffle(freshGooseHonks);
        usedGooseHonks = [];
    }

    var randomHonk = freshGooseHonks.pop();
    usedGooseHonks.push(randomHonk);
    return randomHonk;
}

function getRandomGoose() {
    return getRandomItem(gooseNames);
}

function scrollDown() {
    $(".chatbox").scrollTop(9000000000000);
}


$(document).ready(function() {
    var body = $(".chatbox .message-body");
    var bodytext = "<p>Waiting to connect to a licensed goose therapist.</p>";
    var input = $(".input");
    var readyForInput = false;

    freshGooseHonks = shuffle(freshGooseHonks);

    // Dynamically resizing imagemap
    imageMap = new ImageMap(document.getElementById('door-map'));
    imageMap.resize();

    body.html(bodytext);
    input.prop("disabled", true);

    setTimeout(function() {
        bodytext = "<p>Waiting to connect to a licensed goose therapist..</p>";
        body.html(bodytext);
    }, 1000); 

    setTimeout(function() {
        bodytext = "<p>Waiting to connect to a licensed goose therapist...</p>";
        body.html(bodytext);
    }, 2000); 

    setTimeout(function() {
        bodytext += "<br><p><i>Connected!</i></p><br>";
        body.html(bodytext);
    }, 3000); 

    setTimeout(function() {
        bodytext += `<p>You have been connected to <b>Dr. ${getRandomGoose()}</b></p><br>`;
        body.html(bodytext);
        input.prop("disabled", false);
        $("#therapy-enter")[0].play();
        $("#active-office").attr("src", $("#session").attr("src"));
        readyForInput = true;
    }, 4000); 

    //set up event listeners
    input.on("keypress", function(event) {
        //if the return key(13) is pressed
        if (event.which == 13) {
            var inputContent = input.val();
            if (inputContent != ""){
                bodytext += `<span class="bubble tag is-info is-large user-bubble">${inputContent}</span><br>`;
                body.html(bodytext);
                input.val("");
                scrollDown();
                input.prop("disabled", true);

                //Delayed honking
                var preHonkBodyText = bodytext;
                setTimeout(function() {
                    bodytext = preHonkBodyText + `<span class="doctor-bubble bubble tag is-primary is-large">.</span>`;
                    body.html(bodytext);
                    scrollDown();
                }, 500); 

                setTimeout(function() {
                    bodytext = preHonkBodyText + `<span class="doctor-bubble bubble tag is-primary is-large">..</span>`;
                    body.html(bodytext);
                    scrollDown();
                }, 1000); 

                setTimeout(function() {
                    bodytext = preHonkBodyText + `<span class="doctor-bubble bubble tag is-primary is-large">...</span>`;
                    body.html(bodytext);
                    scrollDown();
                }, 1500); 

                setTimeout(function() {
                    bodytext = preHonkBodyText + `<span class="doctor-bubble bubble tag is-primary is-large">${getRandomHonk()}</span>`;
                    body.html(bodytext);
                    scrollDown();
                    input.prop("disabled", false);
                    input.focus();
                }, 2500); 
            }
        }
    });

    $("#door-area").hover(function() {
        if (readyForInput) {
            $("#active-office").attr("src", $("#leaving").attr("src"));
            $("#therapy-leave")[0].play();
        }
    }, function() {
        if (readyForInput) {
            $("#active-office").attr("src", $("#session").attr("src"));
        }
    });
});
