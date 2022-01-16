// for the reload button
const reloadButton = document.querySelector("#reset");
const checkButton = document.querySelector("#check");

function reload() {
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false)




// for the check answers button

var div101 = document.getElementById("div101");
var div102 = document.getElementById("div102");
var div103 = document.getElementById("div103");
var div104 = document.getElementById("div104");
var div105 = document.getElementById("div105");
var div106 = document.getElementById("div106");
var div107 = document.getElementById("div107");
var div108 = document.getElementById("div108");
var div109 = document.getElementById("div109");
var div110 = document.getElementById("div110");
var div111 = document.getElementById("div111");
var div112 = document.getElementById("div112");
var div113 = document.getElementById("div113");
var div114 = document.getElementById("div114");
var div115 = document.getElementById("div115");
var div116 = document.getElementById("div116");
var div117 = document.getElementById("div117");
var div118 = document.getElementById("div118");
var div119 = document.getElementById("div119");
var div120 = document.getElementById("div120");

checkButton.addEventListener("click", checkAnswers, false);

function checkAnswers() {

    var totalScore = 0;

    if (div101.getElementsByTagName('img').length > 0) {
        if (div101.getElementsByTagName('img')[0].classList.contains("img1")) {
            totalScore++;
        }
    }

    if (div102.getElementsByTagName('img').length > 0) {
        if (div102.getElementsByTagName('img')[0].classList.contains("img6")) {
            totalScore++;
        }
    }

    if (div103.getElementsByTagName('img').length > 0) {
        if (div103.getElementsByTagName('img')[0].classList.contains("img11")) {
            totalScore++;
        }
    }

    if (div104.getElementsByTagName('img').length > 0) {
        if (div104.getElementsByTagName('img')[0].classList.contains("img13")) {
            totalScore++;
        }
    }

    if (div105.getElementsByTagName('img').length > 0) {
        if (div105.getElementsByTagName('img')[0].classList.contains("img14")) {
            totalScore++;
        }
    }

    if (div106.getElementsByTagName('img').length > 0) {
        if (div106.getElementsByTagName('img')[0].classList.contains("img20")) {
            totalScore++;
        }
    }

    if (div107.getElementsByTagName('img').length > 0) {
        if (div107.getElementsByTagName('img')[0].classList.contains("img18")) {
            totalScore++;
        }
    }

    if (div108.getElementsByTagName('img').length > 0) {
        if (div108.getElementsByTagName('img')[0].classList.contains("img8")) {
            totalScore++;
        }
    }

    if (div109.getElementsByTagName('img').length > 0) {
        if (div109.getElementsByTagName('img')[0].classList.contains("img9")) {
            totalScore++;
        }
    }

    if (div110.getElementsByTagName('img').length > 0) {
        if (div110.getElementsByTagName('img')[0].classList.contains("img10")) {
            totalScore++;
        }
    }

    if (div111.getElementsByTagName('img').length > 0) {
        if (div111.getElementsByTagName('img')[0].classList.contains("img15")) {
            totalScore++;
        }
    }

    if (div112.getElementsByTagName('img').length > 0) {
        if (div112.getElementsByTagName('img')[0].classList.contains("img3")) {
            totalScore++;
        }
    }

    if (div113.getElementsByTagName('img').length > 0) {
        if (div113.getElementsByTagName('img')[0].classList.contains("img2")) {
            totalScore++;
        }
    }

    if (div114.getElementsByTagName('img').length > 0) {
        if (div114.getElementsByTagName('img')[0].classList.contains("img12")) {
            totalScore++;
        }
    }

    if (div115.getElementsByTagName('img').length > 0) {
        if (div115.getElementsByTagName('img')[0].classList.contains("img17")) {
            totalScore++;
        }
    }

    if (div116.getElementsByTagName('img').length > 0) {
        if (div116.getElementsByTagName('img')[0].classList.contains("img19")) {
            totalScore++;
        }
    }

    if (div117.getElementsByTagName('img').length > 0) {
        if (div117.getElementsByTagName('img')[0].classList.contains("img4")) {
            totalScore++;
        }
    }

    if (div118.getElementsByTagName('img').length > 0) {
        if (div118.getElementsByTagName('img')[0].classList.contains("img7")) {
            totalScore++;
        }
    }

    if (div119.getElementsByTagName('img').length > 0) {
        if (div119.getElementsByTagName('img')[0].classList.contains("img16")) {
            totalScore++;
        }
    }

    if (div120.getElementsByTagName('img').length > 0) {
        if (div120.getElementsByTagName('img')[0].classList.contains("img5")) {
            totalScore++;
        }
    }

    alert("You got " + totalScore+"/20 correct! Click the restart button to try again!");
}





