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
  }, 1000);
}

function unflipCards(cardA, cardB) {

  pause = setTimeout(function() {

    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardsClicked = 0;
  }, 1000);
}





window.onload = function() {

  cardList = document.querySelectorAll(".card");


  cardCount = cardList.length;

  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      cardClicked(this);
    }
  }

}