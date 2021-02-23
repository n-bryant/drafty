import { render, screen } from "@testing-library/vue";
import SetOption from "@/components/SetOption.vue";

const props = {
  set: {
    name: "Kaldheim",
    code: "KHM",
    splashImgSrc:
      "https://media.magic.wizards.com/fpcbrbmyse_1200x600_still.jpg",
    logoSrc:
      "https://images.ctfassets.net/s5n2t79q9icq/52UHGg2M4nwCblMfCEvLg7/27cf99b65b14478975d3eaaad96f61e8/logotype-kaldheim.png"
  }
};

describe("SetOption.vue", () => {
  it("should render successfully", () => {
    render(SetOption, {
      props
    });
  });

  describe("when hovering", () => {
    it("should render action links", () => {
      render(SetOption, {
        stubs: ["router-link"],
        props,
        data() {
          return {
            hovering: true
          };
        }
      });
      screen.queryByText("Draft");
      screen.queryByText("Sealed");
    });
  });

  describe("when not hovering", () => {
    it("should not render action links", () => {
      render(SetOption, {
        stubs: ["router-link"],
        props,
        data() {
          return {
            hovering: false
          };
        }
      });
      expect(screen.queryByText("Draft")).not.toBeInTheDocument();
      expect(screen.queryByText("Sealed")).not.toBeInTheDocument();
    });
  });
});
