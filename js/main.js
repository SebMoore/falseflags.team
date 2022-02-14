var x1 = 0;
var x2 = 0;
var firstRun1 = true;
var firstRun2 = true;
var logo = `
  █                                                                                                                         
 ███                                                                                                                        
█████                                                                                                                       
 ███    █████████████                                                                                                       
 ███ ████████████████████████          ██                                                                                   
 ███ █████  ██████████████  ████████████                                                                                    
 ███ ███████  ██████████  █████████████                                                                                     
 ███ █████████  ██████  █████████████                                                                                       
 ███ ███████████  ██  ██████████████                                                                                        
 ███ █████████████  ██████████████                                                                                          
 ███ ███████████  ██  ███████████                                                                                           
 ███ █████████  ██████  █████████                                                                                           
 ███ ███████  ██████████  █████████                                                                                         
 ███ █████  ██████████████  ████████                                                                                        
 ███ █████████████████████████████████                                                                                      
 ███ ███                ███████████████                                                                                     
 ███                           ████████                                                                                     
 ███                                                                                                                        
 ███                                                                                                                        
 ███                                                                                                                        
 ███      ███████      ██      ██         ██████    ███████            ███████    ██          ███       █████     ██████    
 ███      ██          ████     ██        ██    ██   ██                 ██         ██         █████     ██   ██   ██    ██   
 ███      ██         ██  ██    ██        ██         ██                 ██         ██        ██   ██   ██         ██         
 ███      ███████    ██  ██    ██         ██████    ███████            ███████    ██        ██   ██   ██   ███    ██████    
 ███      ██         ██████    ██              ██   ██                 ██         ██        ███████   ██    ██         ██   
 ███      ██        ██    ██   ██        ██    ██   ██                 ██         ██       ██     ██   ██   ██   ██    ██   
 ███      ██        ██    ██   ███████    ██████    ███████            ██         ███████  ██     ██    █████     ██████    
    `;
var logoArray = logo.split(/[\r\n]+/)
var subtitle= "Proudly Crushing CTFs since 2022"
var speed = 1000; /* The speed/duration of the effect in milliseconds */

function typeLogo() {
  if (x1 < logoArray.length) {
    document.getElementById("terminal").innerHTML += logoArray[x1] + "<br>";
    x1++
    setTimeout(typeLogo, speed);
  } else{
    if (x2 < subtitle.length) {
      if (firstRun1 == true) {
        document.getElementById("terminal").innerHTML += "<span id='terminal-inner' style='font-family: VT323; font-size: max(2rem, 4vmin); word-wrap: break-word; white-space: normal;'></span>";
        firstRun1 = false;
      }
      document.getElementById("terminal-inner").innerHTML += subtitle[x2];
      x2++;
      setTimeout(typeLogo, speed);
    } else {
      if (firstrun2 = true) {
        document.getElementById("terminal").innerHTML += "<div class='button-outer'> <div class='button-inner'><button class='terminal-button' id='button-writeups' onclick='showWriteups()'>Writeups</button></div> <div class='button-inner'><a class='terminal-button' id='button-contact' href='https://ctftime.org' target='_blank' rel='noopener'>CTFTime.org</a></div> </div>";
        firstrun2 = false;
      }
    }
  }
}