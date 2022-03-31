function flip_goose(goose) {
    if (goose.classList.contains("flipped")) {
        goose.classList.remove("flipped") 
    } else {
        goose.classList.add("flipped")
    }
}