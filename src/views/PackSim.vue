<template>
  <div id="pack-sim">
    <div
      class="pack-wrapper"
      v-for="(rarity, i) in cardsSortedByRarity"
      :key="i"
    >
      <div class="cards">
        <div
          class="card"
          v-for="(card, j) in rarity"
          :key="`${card.identifiers.multiverseId}-${j}`"
          :style="
            `transform: translate(-50%, -50%) rotate(calc(-50deg / 2 + 50deg / (${
              rarity.length
            } + 1) * ${j + 1}));`
          "
        >
          <CardImage
            :src="card.imageSrc"
            :label="card.name"
            :rarity="card.rarity"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardImage from "@/components/CardImage";
import constants from "@/constants/simulation";

const { rarities } = constants;

export default {
  components: {
    CardImage
  },
  props: {
    pack: {
      type: Array,
      required: true
    }
  },
  computed: {
    cardsSortedByRarity() {
      // find cards by rarity
      const cardsByRarity = this.pack.reduce((rarities, card) => {
        if (!rarities[card.rarity]) {
          rarities[card.rarity] = [];
        }
        rarities[card.rarity].push(card);
        return rarities;
      }, {});

      // merge rare and mythic lists (still preserve the rarity on the card's data, though! - used for glow effect)
      if (cardsByRarity[rarities.MYTHIC] && cardsByRarity[rarities.RARE]) {
        cardsByRarity[rarities.RARE] = cardsByRarity[rarities.MYTHIC].concat(
          cardsByRarity[rarities.RARE]
        );
        delete cardsByRarity[rarities.MYTHIC];
      }

      return Object.keys(cardsByRarity)
        .sort((a, b) => {
          const RARITY_SORT_ORDER_MAP = {
            mythic: "a",
            rare: "b",
            uncommon: "c",
            common: "d"
          };

          if (RARITY_SORT_ORDER_MAP[a] < RARITY_SORT_ORDER_MAP[b]) {
            return -1;
          }
          if (RARITY_SORT_ORDER_MAP[a] > RARITY_SORT_ORDER_MAP[b]) {
            return 1;
          }
          return 0;
        })
        .map(rarity => cardsByRarity[rarity]);
    }
  }
};
</script>

<style lang="scss" scoped>
#pack-sim {
  color: $swamp-light;
  position: relative;
  height: calc(100% - #{$header-height});
  overflow: auto;

  .title {
    margin: $spacing-2 auto;
    font-weight: $font-weight-light;
  }
}

.pack-wrapper {
  width: 100%;
  margin-top: 24px;
  &:last-of-type {
    margin-bottom: 96px;
  }
}

.cards {
  position: relative;
  height: calc(#{$card-height} / 1.25);

  @include md {
    height: $card-height;
  }
}

.card {
  height: calc(#{$card-height} / 1.75);
  width: calc(#{$card-width} / 1.75);
  border-radius: $card-radius;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center 250%;

  @include md {
    height: calc(#{$card-height} / 1.25);
    width: calc(#{$card-width} / 1.25);
  }

  &:first-of-type {
    margin-left: $spacing-0;
  }

  &:hover {
    z-index: 10;
  }
}
</style>
