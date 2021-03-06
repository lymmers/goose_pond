/**
 * Returns a shuffled version of an array
 */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

/**
 * Gets a random item from an array
 */
function getRandomItem(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ImageMap = function (map) {
    var n,
        areas = map.getElementsByTagName('area'),
        len = areas.length,
        coords = [],
        previousWidth = 1920;
    for (n = 0; n < len; n++) {
        coords[n] = areas[n].coords.split(',');
    }
    this.resize = function () {
        var n, m, clen,
            x = document.body.clientWidth / previousWidth;
        for (n = 0; n < len; n++) {
            clen = coords[n].length;
            for (m = 0; m < clen; m++) {
                coords[n][m] *= x;
            }
            areas[n].coords = coords[n].join(',');
        }
        previousWidth = document.body.clientWidth;
        return true;
    };
    window.onresize = this.resize;
}
