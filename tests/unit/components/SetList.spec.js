import { render, screen } from "@testing-library/vue";
import SetList from "@/components/SetList.vue";
import sets from "@/constants/sets";

describe("SetList.vue", () => {
  it("should render successfully", () => {
    render(SetList, { stubs: ["transition", "transition-group", "SetOption"] });
  });

  it("should render the instructional message", () => {
    render(SetList, {
      stubs: ["transition", "transition-group"]
    });
    screen.getByText(/Pick a set/i);
  });

  it("should render a set option for each set provided", () => {
    render(SetList, {
      stubs: ["transition", "transition-group"],
      data() {
        return {
          sets
        };
      }
    });
    Object.values(sets).forEach(set => {
      screen.getByTitle(set.name);
    });
  });
});
