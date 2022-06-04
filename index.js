// Code your solutions in this file
const names = [];
const messages =[];


function writeCards(names, event ) {
    for (let i=0; i < names.length; i++){
      
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        messages.push(message);
       
        
    }
    return messages;
}
writeCards();


function countDown(n){
    let count = 0;
    while (count <= n){
        console.log(count);
        count++;
      
    }
 
}
countDown(10);