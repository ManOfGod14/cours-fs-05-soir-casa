import DemoModule from "./demo";

// import $ = require('jquery);
import * as $ from "jquery";

/**
 * Les enum : permet de définir les propriétés/valeurs constants
 */
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

let dm = new DemoModule({
    autoplay: true,
    xval: 5,
    message: () => Direction.UP
});

// let $: any; // non recommandé

/**
 * les modules externes
 */
$("#demo").click(function(evt) {

})





