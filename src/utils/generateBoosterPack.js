import getWeightedRandomCardId from "./getWeightedRandomCardId";

/**
 * returns a pack generated based on the provided booster mappings and cards
 * @param {Object} boosterGuide - a map of rarity types with expected quantities for each rarity
 * @param {Object} sheets - a map of weighted card ids by rarity type
 * @param {Array} cards - a list of cards with uuid values matching card ids mapped in sheets
 * @returns {Array} randomly generated pack
 */
function generateBoosterPack(boosterGuide, sheets, cards) {
  return Object.keys(boosterGuide).reduce((pack, rarity) => {
    const desiredQuantityOfRarity = boosterGuide[rarity];

    let count = 0;
    // get an amount of random weighted card ids based on the desired quantity for the given rarity
    while (count < desiredQuantityOfRarity) {
      const cardId = getWeightedRandomCardId(
        sheets[rarity].cards,
        sheets[rarity].totalWeight
      );

      // if we find a card matching the random id, add it to the pack
      const cardToAdd = cards.filter(card => card.uuid === cardId)[0];
      if (cardToAdd) {
        cardToAdd.imageSrc = `https://api.scryfall.com/cards/${cardToAdd.identifiers.scryfallId}?format=image`;
        // alternate -> `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${cardToAdd.identifiers.multiverseId}&type=card`
        pack.push(cardToAdd);
      }
      count++;
    }
    return pack;
  }, []);
}

export default generateBoosterPack;
