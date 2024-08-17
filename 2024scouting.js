/*function notecounter() { 
    var ampscore=amp.value*1;
    alert(ampscore);
}
*/

function addamp(){
    amp.value++;
    document.getElementById("amp").innerHTML=amp;
}
function subtractamp(){
    amp.value--;
    document.getElementById("amp").innerHTML=amp;
}


function addautospeak(){
    autospeak.value++;
    document.getElementById("autospeak").innerHTML=autospeak;
}
function subtractautospeak(){
    autospeak.value--;
    document.getElementById("autospeak").innerHTML=autospeak;
}
function addautoamp(){
    autoamp.value++;
    document.getElementById("autoamp").innerHTML=autoamp;
}
function subtractautoamp(){
    autoamp.value--;
    document.getElementById("autoamp").innerHTML=autoamp;
}
function addautomisses(){
    automisses.value++;
    document.getElementById("automisses").innerHTML=automisses;
}
function subtractautomisses(){
    automisses.value--;
    document.getElementById("automisses").innerHTML=automisses;
}
function addspeaker(){
    speaker.value++;
    document.getElementById("speaker").innerHTML=speaker;
}
function subtractspeaker(){
    speaker.value--;
    document.getElementById("speaker").innerHTML=speaker;
}
function addmissedshots(){
    missedshots.value++;
    document.getElementById("missedshots").innerHTML=missedshots;
}
function subtractmissedshots(){
    missedshots.value--;
    document.getElementById("missedshots").innerHTML=missedshots;
}
function addampspeaker(){
    amplifiedspeaker.value++;
    document.getElementById("amplifiedspeaker").innerHTML=amplifiedspeaker;
}
function subtractampspeaker(){
    amplifiedspeaker.value--;
    document.getElementById("amplifiedspeaker").innerHTML=amplifiedspeaker;
}
function addpassed(){
    passed.value++;
    document.getElementById("passed").innerHTML=passed;
}
function subtractpassed(){
    passed.value--;
    document.getElementById("passed").innerHTML=passed;
}