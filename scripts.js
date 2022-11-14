cardsClicked = 0;

function cardClicked(what) {
  //make sure card hasnt been removed
  if (!what.classList.toggle("matched")) {

  }

  if (what.classList.toggle("clicked")) {
    //already clicked
    what.classList.remove("clicked");
    cardsClicked--;
  } else {
    //not already clicked
    what.classList.add("clicked");
    cardsClicked++;

    if (cardsClicked == 2) {
      //compare card values
      cardCompare();
    }
  }
}

function cardCompare() {
  clickedCards = document.querySelectorAll(".clicked");

  //first clicked element is clickedCards[0]
  //second clicked element is clickedCards[1]

  matched = false; //track if anything matched

  if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
    matched = true; //matched pic1

  } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2")) {
    matched = true; //matched pic2
  
  } else if (clickedCards[0].classList.contains("pic3") && clickedCards[1].classList.contains("pic3")) {
    matched = true; //matched pic2
  
  } else if (clickedCards[0].classList.contains("pic4") && clickedCards[1].classList.contains("pic4")) {
    matched = true; //matched pic2
  
  }

  if (matched) {
    //hide cards
    removeCards(clickedCards[0], clickedCards[1]);

  } else {
    //unflip
    unflipCards(clickedCards[0], clickedCards[1]);

  }

}

function removeCards(cardA, cardB) {

  pause = setTimeout(function() {

    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardA.classList.add("matched");
    cardB.classList.add("matched");

    cardsClicked = 0;
    
    checkWinning();
    
  }, 1000);
}

function unflipCards(cardA, cardB) {

  pause = setTimeout(function() {

    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardsClicked = 0;
  }, 1000);
}

function checkWinning() {
  remainingCards = document.querySelectorAll(".card"); //get all cards
  
  countCards = remainingCards.length;
  
  //cycle through all cards and check for match
  for (c = 0; c < countCards; c++) {
    if (remainingCards[c].classList.contains("matched") ) {
      return;
    }
  }
  
  document.getElementById("mainTable").innerHTML = "you won";
}

function shuffleCards() {
  table = document.querySelector("#mainTable");
  cardCount = table.children.length;
  
  cardToMove = table.children[0];
  table.appendChild( cardToMove );
  
  for (c = 0; c < cardCount; c++) {
    randomCard = Math.floor( Math.random() * cardCount );
    cardToMove = table.children[randomCard];
    table.appendChild( cardToMove );
  }
}



window.onload = function() {
  
  shuffleCards();

  cardList = document.querySelectorAll(".card"); //cards collection


  cardCount = cardList.length;

  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      cardClicked(this);
    }
  }

}