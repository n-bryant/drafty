import { render, screen } from "@testing-library/vue";
import CardImage from "@/components/CardImage.vue";

const props = {
  src: "my-image-path",
  label: "my image label",
  rarity: "mythic"
};

describe("CardImage.vue", () => {
  it("should render successfully", () => {
    render(CardImage, { props });
  });

  it("should render an image with the provided label as alt text", () => {
    render(CardImage, { props });
    screen.getByAltText(props.label);
  });
});
