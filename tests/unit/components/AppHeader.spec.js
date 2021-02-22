import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  it("should render successfully", () => {
    shallowMount(AppHeader, {
      stubs: ["router-link"]
    });
  });

  it("should render the logo", () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: ["router-link"]
    });
    expect(wrapper.find(".app-title").text()).toBe("Drafty");
  });
});
