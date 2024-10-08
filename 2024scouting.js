document.getElementById("submit").addEventListener("click",async (e)=>{
 e.preventDefault();
 
 await fetch("https://script.google.com/macros/s/AKfycbwu4kgs3MB7BCS3_9EEOYWSSGvFXx5kPRzrEwNB9UB4I4QGB-U1uKMSInUJbttVWk83/exec",{
  method:"POST",
  body:JSON.stringify({

   yooo:"yoo"
  })
 }).then(res=>console.log(res)).catch(err=>console.log(err))
})

 function addamp(e){
     e.preventDefault();
  let amp = document.getElementById("amp").value;
    // amp.value++;
  if(!amp){
   amp=0;
  }
    document.getElementById("amp").innerHTML=amp;
  return false;
}
function subtractamp(e){
     e.preventDefault();
      let amp = document.getElementById("amp").value;
     if(!amp){
      amp=0
     }
    amp.value--;
    document.getElementById("amp").innerHTML=amp;
  return false;
 
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



function EPAbreakdown(){
    //auto
    var a_speaker=(autospeak.value*1)*5;
    var a_amp=(autoamp.value*1)*2;  
    var l_line=leftline.value*1;
    var autoepa = a_speaker + a_amp + l_line;
    document.getElementById("autoepa").innerHTML=autoepa;

    //teleop
    var t_speaker=(speaker.value*1)*2;
    var t_amp=amp.value*1;
    var t_amplified = (amplifiedspeaker.value*1)*5;
    var teleopepa = t_speaker + t_amp + t_amplified;
    document.getElementById("teleopepa").innerHTML=teleopepa;

    //endgame
    var e_parktype = parkingtype.value*1;
    var e_trap = trap.value*1;
    var e_harmony;
    if(e_parktype==0 || e_parktype==1){
        e_harmony = 0;
    }
    else{
    var e_harmony = ((parkingtype.value*1)+1);
    }   
    
    var endgameepa;
    if(e_harmony != 0){
        endgameepa = e_harmony+e_trap;
    }
    else{
        endgameepa = e_parktype + e_trap;
    }
    document.getElementById("endgameepa").innerHTML=endgameepa;

    document.getElementById("totalepa").innerHTML=endgameepa+teleopepa+autoepa;
}
