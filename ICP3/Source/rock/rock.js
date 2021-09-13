var player=0;
var comp=0;
var uroll;
function score(){
    var score_cal = document.getElementById("score").innerHTML = player +" &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         " + comp;
}
setInterval(score, 30);

//code for rock
function rock()
{
    uroll = 1;
    var croll = Math.floor(Math.random() * 3 + 1);

    if (croll === uroll) {
        document.getElementById("Result").innerHTML=" Computer has chosen rock too, game is draw";
    }

    else if (uroll === 1 && croll === 2) {
        document.getElementById("Result").innerHTML="Computer has chosen paper , computer has won";
        comp++;
    }

    else {
        document.getElementById("Result").innerHTML="Computer has chosen scissors ,  you won";
        player++;
    }
}

//code for paper
function paper()
{
    document.getElementById("Result").Text="";
    console.log(document.getElementById("Result").innerHTML)
    uroll = 2;
    var croll = Math.floor(Math.random() * 3 + 1);
    if (croll === uroll) {
        document.getElementById("Result").innerHTML= " Computer has chosen paper too, game is draw";
    } else if (uroll === 2 && croll === 1) {
        document.getElementById("Result").innerHTML="Computer has chosen rock , you won";
        player++;
    } else {
        document.getElementById("Result").innerHTML="Computer has chosen scissors , computer has won";
        comp++;
    }
}

//code for scissors
function scissors()
{
    uroll = 3;
    var croll = Math.floor(Math.random() * 3 + 1);
    document.getElementById("Result").Text="";
    if (croll === uroll) {
        document.getElementById("Result").innerHTML=" Computer has chosen scissors too, game is draw";
    }
    else if (uroll === 3 && croll === 2) {
        document.getElementById("Result").innerHTML="Computer has chosen paper , computer has won";
        comp++;
    } else {
        document.getElementById("Result").innerHTML="Computer has chosen scissors , you won";
        player++;
    }
}