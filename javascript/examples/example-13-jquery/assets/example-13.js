/**
 * jQuery
 */
$(document).ready(() => {
    $("#btnId1").click(function() {
        $(this).hide();
    });
});

// les notations suivantes sont equivalentes
window.jQuery(); // notation mentionnant window et utilisant l'objet jQuery
jQuery(); // notation utilisant l'objet jQuery avec window implicite

// ou //

window.$(); // notation mentionnant window et utilisant l'objet $
$(); // notation utilisant l'objet $ avec window implicite

// console.log($("p"));
// console.log(document.querySelectorAll('p'));

// $(selecteur).action()
// $("p").hide();

// $(document).ready(() => {
//     $("p").hide();
// })

$(document).ready(() => {
    // les méthodes has(), filter(), not(), first(), last(), et eq()

    // selection de tous les éléments p ayant contenant un élément span
    let pSpanElt = $("p").has("span").css("color", "red");

    // selection de tous les éléments span ayant une classe "souligner"
    $("span").filter(".souligner").css("color", "green");

    // selection de tous les éléments span n'ayant pas une classe "souligner"
    $("span").not(".souligner").css("color", "blue");

    // sélectionne le premier élément h2
    $("h2").first().css("color", "blue");

    // sélectionne le dernier élément h2
    $("h2").last().css("color", "cyan");

    // sélectionne le deuxième élément h2 du haut vers le bas
    $("h2").eq(1).css("color", "orange");

    // sélectionne le deuxième élément h2 du bas vers le haut
    $("h2").eq(-2).css("color", "purple");

    // selectionne tous les parents direct de li
    $('li').parent().css("border", "1px solid black");

    // selectionne tous les parents direct de li ayant un id firstUlId
    $('li').parent("#firstUlId").css("background-color", "#ff66b3");

    // sélectionne tous les ancêtres de l'élément ul
    $("ul").parents().css("border", "1px solid blue");

    // sélectionne tous les ancêtres div de l'élément ul
    $("ul").parents("div").css("background-color", "#99ff99");

    // sélection tous les ancêtres en dessous
    $("#secondUlId").parentsUntil(".container").css("border", "2px solid red");

    // sélectionne l'ancêtre div le plus proche de l'id firstUlId
    $("#firstUlId").closest("div").css("border", "2px dotted green");

    // sélectionne tous les enfants (descendants directs) des éléments possédant (parents)
    $(".container").children().css("border", "3px solid yellow");

    // sélectionne tous les enfants (descendants directs) h5 de notre sélection
    $(".container").children("h5").css("background-color", "red");

    // cible tous les déscendants de l'élément dont id=firstChildId et qui possède un id=secondUlId
    $("#firstChildId").find("#secondUlId").css("background-color", "#4d79ff");

    // html()
    let page = $("body").html();
    let firstUlIdHtml = $("#firstUlId").html();

    // console.log("Page : "+ page);
    // console.log("FirstUlIdHtml : "+ firstUlIdHtml);

    //
    $("#idH5").html("<h5>Children test 3 remplacé</h5>");

    // val()
    let firstnameVal = $("#firstname").val();
    let lastanmeVal = $("#lastname").val();
    console.log(firstnameVal + " " + lastanmeVal);


    // effectuer un copie profonde de container
    let copie = $(".container").clone();
    // console.log(copie);
    // copie.appendTo("body");

    let monLienAttr = $("#monLien").attr("id");
    console.log(monLienAttr);
    $("#monLien").attr("target", "_blank");
});

/**
 * Gestion des évènements
 */
$(document).ready(() => {
    // méthode click (pour écouter un évènement de clic)
    $("#eventDivId1").click(function() {
        // console.log($("p"));
        // toggleClass permet d'inverser les noms de classe de l'élement sélectionné
        $("#eventPId1").toggleClass("afficher cacher");

        // les éléments ayant la classe "afficher" seront visibles
        $(".afficher").show();

        // les éléments ayant la classe "cacher" seront invisibles
        $(".cacher").hide();
    });

    // méthode dblclick (pour écouter un évènement de double clic)
    $("#eventDivId1").dblclick(function() {
        $(this).css("background-color", "#00264d");
    });

    // méthode mouseenter (pour écouter un évènement de passage de souris)
    $("#eventDivId2").mouseenter(function() {
        $(this).css("background-color", "#4d79ff");
    });

    // méthode mouseleave (pour écouter un évènement de sorti de souris)
    $("#eventDivId2").mouseleave(function() {
        $(this).css("background-color", "");
    });

    // méthode hover (pour écouter un évènement en éffectuant un éffet hover)
    $("#eventDivId3").hover(
        function() { $(this).css("background-color", "#85e085"); }, 
        function() { $(this).css("background-color", ""); }
    );

    // méthode mousedown (pour écouter l'évènement de clic et du maintien de la souris)
    $("#eventDivId4").mousedown(function() {
        $(this).css("background-color", "#ff80bf");
    });

    // méthode mouseup (pour écouter l'évènement de délaissement  de la souris)
    $("#eventDivId4").mouseup(function() {
        $(this).css("background-color", "");
    });

    // méthode mousemove (pour écouter l'évènement du déplacement de la souris en récupérant les coordonnées de sa position)
    $("body").mousemove(function(evt) {
        // console.log(evt);
        let pageCoords = "(" + evt.pageX + ", " + evt.pageY + ")";
        $("#mousemoveId").find("span").text(pageCoords);
    });

    // keydown() affiche le code la dernière touche pressée
    $("#eventDivId6").first("div").find("#inputText1").keydown(function(evt) {
        // console.log($(this));
        $(this).css("background-color", "#006666");
        $("#spanTextId1").text(evt.which);
    });

    //
    $("#inputText1").keypress(function(evt) {
        $("#spanTextId11").text(evt.which);
    });

    // keyup() écouter l'évènement de touche d'un bouton du clavier
    $("#inputText2").keyup(function() {
        $(this).css("background-color", "#ffd9b3");
    });

});
