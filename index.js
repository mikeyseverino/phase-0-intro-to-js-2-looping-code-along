/*function writeCards(names, event){
    let cards = []
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return cards;
}

function countDown(startingNumber){
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNUmber -= 1;
    }
    console.log(startingNumber);
}*/


   
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }