const tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
document.getElementById('id1').innerHTML += "Tableau 1 = ["+ tableau +"]";

for(let i = 0; i < 100; i++) {
    if(i == 0) {
        document.getElementById('id2').innerHTML = "Tableau 2 = [" + i + ", ";
    } else if(i != 99) {
        document.getElementById('id2').innerHTML += i + ", ";
    } else {
        document.getElementById('id2').innerHTML += i + "]";
    }
}