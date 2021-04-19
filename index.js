// Code your solutions in this file
function writeCards(names, event) {
    let thanksMessages = [];
    for (let i = 0; i < names.length; i++) {
      thanksMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      
    }
    return thanksMessages;
  }

  function countDown(number){
    let counter = number;
    while(counter >= 0){
      console.log(counter);
      counter -= 1;
    }
  }