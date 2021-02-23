import { render, screen } from "@testing-library/vue";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  it("should render successfully", () => {
    render(AppHeader, { stubs: ["router-link", "PackIcon"] });
  });

  it("should render the logo", () => {
    render(AppHeader, { stubs: ["router-link", "PackIcon"] });
    screen.getByText("Drafty");
  });
});
