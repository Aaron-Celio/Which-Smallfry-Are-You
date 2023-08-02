
let button = document.querySelector(".submitButton");
let result = document.querySelector(".result");
let sleeping = document.querySelector(".sleeping")
let energetic = document.querySelector(".energetic")
let yawning = document.querySelector(".yawning")
let serious = document.querySelector(".serious")
let question = document.querySelector(".question")
let counter=document.querySelector(".counter")
var x = 0;
var audio = new Audio("https://vgmsite.com/soundtracks/super-mario-64-n64/hfpkabidpd/18%20Piranha%20Plant%27s%20Lullaby.flac")
var audio2 = new Audio("https://vgmsite.com/soundtracks/wii-sports-wii/oyizsynbol/24%20Bowling%20%28Results%20Screen%29.flac")
var audio3 = new Audio("https://vgmsite.com/soundtracks/splatoon-original-soundtrack-splatune/vujkiwpunc/2-17.%20Sunken%20Scroll.flac")
var audio4 = new Audio("https://vgmsite.com/soundtracks/wii-play/qoqqqqcf/003%20-%20Menu.flac")

button.onclick=function(){
let input1 = document.querySelector(".input1").value;
let input2 = document.querySelector(".input2").value;
 

if((input1>=1 && input1<=5) && input2==="yes"){
  audio.pause()
  audio2.pause()
  audio3.pause()
  audio4.pause()

  audio.currentTime=0
  audio2.currentTime=0
  audio3.currentTime=0
  audio4.currentTime=0

  audio.play()
  
  result.innerHTML="You picked " + input1 + " and " + input2 + ". You are a Sleeping Smallfry"
  sleeping.style.display="block"
  question.style.display="none"
  energetic.style.display="none"
  yawning.style.display="none"
  serious.style.display="none"
  x = x+1
  counter.innerHTML="This quiz has been taken " + x + " times."
}

else if((input1>=1 && input1<=5) && input2==="no"){
 
result.innerHTML="You picked " + input1 + " and " + input2 + ". You are an Energetic Smallfry"

  audio.pause()
  audio2.pause()
  audio3.pause()
  audio4.pause()

  audio.currentTime=0
  audio2.currentTime=0
  audio3.currentTime=0
  audio4.currentTime=0

  audio2.play()
  
  energetic.style.display="block"
  question.style.display="none"
  sleeping.style.display="none"
  yawning.style.display="none"
  serious.style.display="none"
   x = x+1
  counter.innerHTML="This quiz has been taken " + x + " times."
}
  
  else if((input1>=6 && input1<=10) && input2==="yes"){
result.innerHTML="You picked " + input1 + " and " + input2 + ". You are a Yawning Smallfry"

  audio.pause()
  audio2.pause()
  audio3.pause()
  audio4.pause()

  audio.currentTime=0
  audio2.currentTime=0
  audio3.currentTime=0
  audio4.currentTime=0

  audio3.play()
    
    yawning.style.display="block"
    question.style.display="none"
    energetic.style.display="none"
    sleeping.style.display="none"
    serious.style.display="none"
     x = x+1
  counter.innerHTML="This quiz has been taken " + x + " times."
}

  else if((input1>=6 && input1<=10) && input2==="no"){
result.innerHTML="You picked " + input1 + " and " + input2 + ". You are a Serious Smallfry"

    audio.pause()
  audio2.pause()
  audio3.pause()
  audio4.pause()

  audio.currentTime=0
  audio2.currentTime=0
  audio3.currentTime=0
  audio4.currentTime=0

  audio4.play()
    
    serious.style.display="block"
    question.style.display="none"
    energetic.style.display="none"
    yawning.style.display="none"
    sleeping.style.display="none"
     x = x+1
  counter.innerHTML="This quiz has been taken " + x + " times."
}
  else {
    result.innerHTML="You made a typo! Try again!"
    serious.style.display="none"
    question.style.display="block"
    energetic.style.display="none"
    yawning.style.display="none"
    sleeping.style.display="none"
  }

  if ((x<=1)){
    counter.innerHTML="This quiz has been taken " + x + " time."
  }







  
};