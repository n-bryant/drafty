import { render, screen } from "@testing-library/vue";
import LinkButton from "@/components/LinkButton.vue";

const props = {
  to: { name: "draft-set", params: { set: "KHM" } },
  label: "Draft"
};

describe("LinkButton.vue", () => {
  it("should render successfully", () => {
    render(LinkButton, { props, stubs: ["router-link"] });
  });

  it("should render with the provided label", () => {
    render(LinkButton, { props, stubs: ["router-link"] });
    screen.getByText(props.label);
  });
});
