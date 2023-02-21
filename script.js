window.onload = () => {

  function setTime(){
    // call Date Api
    const date = new Date(); 
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds()

    let time = `${hours} : ${minutes} : ${seconds}` //eg: 12:12:06
    
    //DOM Manipulation
    let showTime = document.getElementById('container');
    let showAlarm = document.getElementById('alarm');
    let showGreeting = document.getElementById('greet');

    showAlarm.innerText = date.getFullYear();  //display full year eg: 2022 in corresponding element

    //promp messages
    let restMessage = 'Get up and stretch your legs'
    let waterBreak = 'Get some water'

    //greeting variables
    const greetingMorning = 'Good Morning'
    const greetingAfternoon = 'Good Afternoon'
    const greetingEvening = 'Good Evening'
      
    //set conditionals to display variables based on personal desires
    if (minutes === 59) { 
      showTime.innerText = restMessage
    }
    else if(minutes % 20 === 0){
      showTime.innerText = waterBreak
    }else{
      showTime.innerText = time;
    }
     
    //set conditionals to display greeting messages based on personal desires
    if (hours >= 24 && hours < 12){
      showGreeting.innerText = greetingMorning
    }
    else if (hours > 11 && hours < 16){
      showGreeting.innerText = greetingAfternoon
    }else{
      showGreeting.innerText = greetingEvening
    }   
  }
setInterval(setTime, 1000) 
}


 





