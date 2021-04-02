import CardService from './cards-service.js';

let cardService = new CardService();

const deckPromise = cardService.getNewDeck();

deckPromise.then((deck) => {
  cardService.getCards(deck.deck_id, 2).then((cards) => {
    addCards(cards, 'player1');

    cardService.getCards(deck.deck_id, 2).then((cards) => {
      addCards(cards, 'player2');
    });
  });
});

document
  .getElementById('player1-hit-me-button')
  .addEventListener('click', () => hitMe('player1'));

document
  .getElementById('player2-hit-me-button')
  .addEventListener('click', () => hitMe('player2'));

function addCards(cards, playerId) {
  const playerCardsElm = document.getElementById(`${playerId}-cards`);
  cards.forEach((card) => {
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', card.image);
    playerCardsElm.append(cardImg);
  });
}

function hitMe(playerId) {
  deckPromise.then((deck) => {
    cardService
      .getCards(deck.deck_id, 1)
      .then((cards) => addCards(cards, playerId));
  });
}
