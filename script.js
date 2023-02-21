window.onload = () => {

function setTime(){
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds()
    let time = `${hours} : ${minutes} : ${seconds}`
    
    let showTime = document.getElementById('container');
    
    showTime.innerText = time;

    let message = 'Mike, get up and stretch your legs'
    let showAlarm = document.getElementById('alarm')

    const greetingMorning = 'Good Morning'
    const greetingAfternoon = 'Good Afternoon'
    const greetingEvening = 'Good Evening'

   
    let showGreeting = document.getElementById('greet')
        

    if (minutes === 59) {
    //   showAlarm.innerText = message;  
      showTime.innerText = message
    }else{
      showAlarm.innerText = date.getFullYear();  
    }

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


 





