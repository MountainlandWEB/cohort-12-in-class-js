export default class CardService {
  getNewDeck() {
    return fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    ).then((response) => {
      console.log('response object', response);
      return response.json();
    });
  }

  getCards(deckId, cardCount) {
    // got get cards using the deck id (deck.id)
    return fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
    ).then((response) =>
      response.json().then((data) => Promise.resolve(data.cards))
    );
  }
}


// export function getNewDeck() {
//   return fetch(
//     'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
//   ).then((response) => {
//     console.log('response object', response);
//     return response.json();
//   });
// }

// export function getCards(deckId, cardCount) {
//   // got get cards using the deck id (deck.id)
//   return fetch(
//     `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
//   ).then((response) =>
//     response.json().then((data) => Promise.resolve(data.cards))
//   );
// }
