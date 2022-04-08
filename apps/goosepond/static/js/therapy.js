const gooseNames = ["Honk Schrader", "Waddler White", "Goostavo Fring", "Jesse Honkman"]
const gooseHonks = [
    "HONK!", 
    "<i>Stares at you blankly</i>", 
    "<i>Attempts to bite you</i>", 
    "<i>Looks around nervously</i>",
    "H..Honk?",
    "HoooOOonk!",
    "Qua--- HONK!",
    "Honk honk",
    "<i>Honks confidently</i>",
    "<i>Waddles around and knocks more stuff over</i>"
]

function getRandomHonk() {
    var index = Math.floor(Math.random() * gooseHonks.length);
    return gooseHonks[index];
}

function getRandomGoose() {
    var index = Math.floor(Math.random() * gooseNames.length);
    return gooseNames[index];
}

function scrollDown() {
    $(".chatbox").scrollTop(9000000000000);
}


$(document).ready(function() {
    var body = $(".chatbox .message-body")
    var bodytext = "<p>Waiting to connect to a licensed goose therapist.</p>"
    var input = $(".input")

    body.html(bodytext)
    input.prop("disabled", true)

    setTimeout(function() {
        bodytext = "<p>Waiting to connect to a licensed goose therapist..</p>"
        body.html(bodytext);
    }, 1000); 

    setTimeout(function() {
        bodytext = "<p>Waiting to connect to a licensed goose therapist...</p>"
        body.html(bodytext);
    }, 2000); 

    setTimeout(function() {
        bodytext += "<br><p><i>Connected!</i></p><br>"
        body.html(bodytext);
    }, 3000); 

    setTimeout(function() {
        bodytext += `<p>You have been connected to <b>Dr. ${getRandomGoose()}</b></p><br>`
        body.html(bodytext);
        input.prop("disabled", false)
        $("#therapy-enter")[0].play()
        $("#session").show()
        $("#waiting").hide()
    }, 4000); 

    //set up event listeners
    input.on("keypress", function(event) {
        //if the return key(13) is pressed
        if (event.which == 13) {
            var inputContent = input.val()
            if (inputContent != ""){
                bodytext += `<div class="bubble"><span class="tag is-info is-large user-bubble">${inputContent}</span><br></div>`
                body.html(bodytext)
                input.val("")
                scrollDown()
                input.prop("disabled", true)

                //Delayed honking
                var preHonkBodyText = bodytext
                setTimeout(function() {
                    bodytext = preHonkBodyText + `<div class="bubble"><span class="tag is-primary is-large">.</span></div>`
                    body.html(bodytext);
                    scrollDown()
                }, 500); 

                setTimeout(function() {
                    bodytext = preHonkBodyText + `<div class="bubble"><span class="tag is-primary is-large">..</span></div>`
                    body.html(bodytext);
                    scrollDown()
                }, 1000); 

                setTimeout(function() {
                    bodytext = preHonkBodyText + `<div class="bubble"><span class="tag is-primary is-large">...</span></div>`
                    body.html(bodytext);
                    scrollDown()
                }, 1500); 

                setTimeout(function() {
                    bodytext = preHonkBodyText + `<div class="bubble"><span class="tag is-primary is-large">${getRandomHonk()}</span></div>`
                    body.html(bodytext);
                    scrollDown()
                    input.prop("disabled", false)
                }, 2500); 
                
                
            }
        }
    })
})