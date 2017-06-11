
function Bg() {
    var d = new Date();
    var h = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var timeNow = h+"."+min;
    var tDiffProcent = timeNow/24*100;

    document.body.style = "background-size: "+tDiffProcent+"%, 100%";
}

Bg();

setInterval(function() {
    Bg();
}, 60000);