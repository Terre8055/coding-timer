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
    showTime.innerText = minutes === 59 ? restMessage : minutes % 20 === 0 ? waterBreak : time;

     
    //set conditionals to display greeting messages based on personal desires
    showGreeting.innerText = hours >= 24 && hours < 12 ? greetingMorning :
                         hours > 11 && hours < 16 ? greetingAfternoon :
                         greetingEvening;

  }
setInterval(setTime, 1000) 
}


 





