/**
 * gets a weighted random card id from a list of cards
 * @param {Object} cards - a list of cards
 * @param {Number} totalWeight - total weight of card weightings
 * @returns {String} - a card id
 */
function getWeightedRandomCardId(cards, totalWeight) {
  let total = 0;
  const cardIds = Object.keys(cards);
  const threshold = Math.random() * totalWeight;

  // iterate over list of cards and add weight until we have met the given threshold
  for (let i = 0; i < cardIds.length; i++) {
    total += cards[cardIds[i]];
    if (total >= threshold) {
      // return the weighted random card id
      return cardIds[i];
    }
  }

  // return the last card id from the provided list of cards
  return cardIds[cardIds.length - 1];
}

export default getWeightedRandomCardId;
