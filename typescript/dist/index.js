import DemoModule from "./demo";
// import $ = require('jquery);
import * as $ from "jquery";
/**
 * Les enum : permet de définir les propriétés/valeurs constants
 */
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
let dm = new DemoModule({
    autoplay: true,
    xval: 5,
    message: () => Direction.UP
});
// let $: any; // non recommandé
/**
 * les modules externes
 */
$("#demo").click(function (evt) {
});
