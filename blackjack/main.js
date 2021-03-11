// when you return a promise you are chaining it to the last one
// promise = fetch() -> response.json() -> getLocation()
const deckPromise = getNewDeck();

getCards(2).then((cards) => {
  addCards(cards, 'player1');

  getCards(2).then((cards) => {
    addCards(cards, 'player2');
  });
});

document
  .getElementById('player1-hit-me-button')
  .addEventListener('click', () => hitMe('player1'));

document
  .getElementById('player2-hit-me-button')
  .addEventListener('click', () => hitMe('player2'));

function getNewDeck() {
  return fetch(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  ).then((response) => {
    console.log('response object', response);
    return response.json();
  });
}

function getCards(cardCount) {
  // got get cards using the deck id (deck.id)
  return deckPromise.then((deck) => {
    return fetch(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${cardCount}`
    ).then((response) =>
      response.json().then((data) => Promise.resolve(data.cards))
    );
  });

  // fetch -> response.json() -> Promise.resolve(data.cards)
}

function addCards(cards, playerId) {
  //   let cardsHtml = '';
  //   cards.forEach((card) => {
  //     cardsHtml += `<img src="${card.image}" />`;
  //   });
  //   document.getElementById(`${playerId}-cards`).innerHTML += cardsHtml;

  const playerCardsElm = document.getElementById(`${playerId}-cards`);
  cards.forEach((card) => {
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', card.image);
    playerCardsElm.append(cardImg);
  });
}

function hitMe(playerId) {
  getCards(1).then((cards) => addCards(cards, playerId));
}
