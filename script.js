//EXTRA 1 CONTARE NUMERI DI VIAGGI IN PAGINA E RENDERIZZARLO IN UN ALERT
/*let trip = document.getElementsByClassName("card-body");
let result = trip.length;
console.log(result);
alert("Il totale dei viaggi presenti in questa pagina è" + " " + result);*/

//EXTRA 2 FUNZIONE PER RIMUOVERE TUTTE LE CARD DALLA PAGINA
//EXTRA 2 OPZIONE 1 FOR LOOP
/*function removeCards () {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.remove();
    }
};

removeCards();*/


//EXTRA 2 OPZIONE 2 FOR EACH
/*function removeCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.remove();
    });
  }

  removeCards();*/
