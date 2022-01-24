import { mount, Wrapper } from "@vue/test-utils";
import Results from "@/components/Results.vue";
import global from "@/store/global";
import Vue from "vue";
import { MoviesResult } from "@/composables/useMovieApi";

describe("Results.vue", () => {
  let wrapper: Wrapper<Vue>;
  // to handle issues with v-icon
  const Stub = {
    template: "<div />",
  };
  beforeEach(() => {
    wrapper = mount(Results, {
      stubs: {
        VIcon: Stub,
      },
    });
  });

  it("has initial state and nothing else is displayed", () => {
    expect(wrapper.find('[data-test="init"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="empty"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="results"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="pagination-buttons"]').exists()).toBe(
      false
    );
  });
  it("displays list of results when data provided and status is ready", async () => {
    const mockResults: MoviesResult = {
      page: 1,
      per_page: 10,
      total: 2,
      total_pages: 1,
      data: [
        {
          Title: "Harry Potter",
          Year: 2000,
          imdbID: "tt1318001",
        },
        {
          Title: "Harry Potter 2",
          Year: 2002,
          imdbID: "tt13183131",
        },
      ],
    };
    await global.mutations.setResults(mockResults);
    await global.mutations.setStatus("ready");
    expect(wrapper.findAll('[data-test="record"]').length).toBe(2);
  });
});
