import { mount, Wrapper } from "@vue/test-utils";
import Favourites from "@/components/Favourites.vue";
import Vue from "vue";
import global from "@/store/global";
import { Record } from "@/composables/useMovieApi";

describe("Favourites.vue", () => {
  let wrapper: Wrapper<Vue>;
  const Stub = {
    template: "<div />",
  };
  beforeEach(() => {
    wrapper = mount(Favourites, {
      stubs: {
        VIcon: Stub,
      },
    });
  });
  it("Favourites list is empty at the beginning", () => {
    expect(wrapper.find('[data-test="empty"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="favourites"]').exists()).toBe(false);
  });
  it("Displays favourites from global store", async () => {
    const record1: Record = {
      Title: "Harry Potter",
      Year: 2000,
      imdbID: "tt1318001",
    };
    const record2: Record = {
      Title: "Harry Potter 2",
      Year: 2002,
      imdbID: "tt13183123",
    };
    await global.mutations.addFavourite(record1);
    await global.mutations.addFavourite(record2);
    expect(wrapper.findAll('[data-test="favourite"]').length).toBe(2);
  });
  it("removes favorites on icon click", async () => {
    const button = wrapper.findAll('[data-test="favourite-remove"]').at(0);
    await button.trigger("click");
    expect(wrapper.findAll('[data-test="favourite"]').length).toBe(1);
  });
});
