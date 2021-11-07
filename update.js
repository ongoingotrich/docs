


function reload(){
    var color = localStorage.getItem("C1");
    var color2 = localStorage.getItem("C2");
 document.getElementById('scoreOne').innerHTML = localStorage.getItem('S1');
 document.getElementById('scoreTwo').innerHTML = localStorage.getItem('S2');

 document.getElementById('gamesOne').innerHTML = localStorage.getItem('G1');
 document.getElementById('gamesTwo').innerHTML = localStorage.getItem('G2');
 document.getElementById('teamOne').innerHTML = localStorage.getItem('T1');
 document.getElementById('teamTwo').innerHTML = localStorage.getItem('T2');
 document.getElementById('teamOne').style.backgroundColor = color
 document.getElementById('teamTwo').style.backgroundColor = color
 document.getElementById('gamesOne').style.backgroundColor = color2
 document.getElementById('gamesTwo').style.backgroundColor = color2
 document.getElementById('scoreOne').style.backgroundColor = color
 document.getElementById('scoreTwo').style.backgroundColor = color
 
 
 
 
 
 


 
} setInterval ('reload()', 1)



