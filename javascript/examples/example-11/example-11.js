// get setTimeout element
let btnSetTimeout = document.querySelector("#btnSetTimeout");

// get clearTimeout element
let btnClearTimeout = document.querySelector("#btnClearTimeout");

let timeoutVal;

btnSetTimeout.addEventListener('click', fnSetTimeout);
function fnSetTimeout() {
    // alert("Message d'alert  après 5 secondes !");
    timeoutVal = setTimeout(
        alert,
        3000, 
        "Message d'alert  après 3 secondes !"
    );
    console.log(timeoutVal);
}

btnClearTimeout.addEventListener('click', fnClearTimeout);
function fnClearTimeout() {
    clearTimeout(timeoutVal);
    console.log(timeoutVal);
}

// setInterval
let btnSetInterval = document.querySelector("#btnSetInterval");

// clearInterval
let btnClearInterval = document.querySelector("#btnClearInterval");

let dateFormat = document.getElementById('dateFormat');
let dateId = document.getElementById('dateId');
let timeId = document.getElementById('timeId');

btnSetInterval.addEventListener('click', fnSetInterval);
function fnSetInterval() {
    setInterval(function() {
        let d = new Date();
        dateFormat.innerHTML = d;
        dateId.innerHTML = d.toLocaleDateString();
        timeId.innerHTML = d.toLocaleTimeString();
    }, 1000);
}


