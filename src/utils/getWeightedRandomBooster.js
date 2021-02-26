/**
 * returns a weighted random booster pack option from a given list of boosters
 * @param {Array} boosters - the list of booster options to consider
 * @param {Number} totalWeight - the total weight of the options in the booster list
 * @returns {Object} a weighted random booster type
 */
function getWeightedRandomBooster(boosters, totalWeight) {
  let total = 0;
  const threshold = Math.random() * totalWeight;

  for (let i = 0; i < boosters.length; i++) {
    total += boosters[i].weight;

    if (total >= threshold) {
      return boosters[i];
    }
  }

  return boosters[boosters.length - 1];
}

export default getWeightedRandomBooster;
