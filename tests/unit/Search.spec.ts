import { mount, Wrapper } from "@vue/test-utils";
import Search from "@/components/Search.vue";
import Vue from "vue";

describe("Search.vue", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(Search);
  });

  it("has initial search value as empty", () => {
    const input = wrapper.find("[data-test='search']")
      .element as HTMLInputElement;
    expect(input.value).toEqual("");
  });
  it("Search button has initial state disabled", () => {
    const button = wrapper.find("[data-test='submit']");
    expect(button.attributes()["disabled"]).toBe("disabled");
  });

  it("Enables button when input inserted", async () => {
    await wrapper.find("[data-test='search']").setValue("movie");
    const button = await wrapper.find("[data-test='submit']");
    expect(button.attributes()["disabled"]).toBe(undefined);
  });
});
