export default class CardService {
  async getNewDeck() {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
    return response.json();
  }

  async getCards(deckId, cardCount) {
    // got get cards using the deck id (deck.id)
    try {
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
      );

      if (!response.ok) {
        throw new Error('Something went horribly wrong, it must be Friday');
      }

      const data = await response.json();

      return data.cards;
    } catch (error) {
      console.log(error);
    }
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
