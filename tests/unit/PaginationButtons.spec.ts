import { mount, Wrapper } from "@vue/test-utils";
import PaginationButtons from "@/components/PaginationButtons.vue";
import Vue from "vue";
import global from "@/store/global";
import { MoviesResult } from "@/composables/useMovieApi";

describe("PaginationButtons.vue", () => {
  let wrapper: Wrapper<Vue>;
  const Stub = {
    template: "<div />",
  };
  beforeEach(() => {
    wrapper = mount(PaginationButtons, {
      stubs: {
        VIcon: Stub,
      },
    });
  });

  it("Shows next button on 1st page when more data to show, and not show Previous", async () => {
    const mockResults: MoviesResult = {
      page: 1,
      per_page: 10,
      total: 20,
      total_pages: 2,
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
    expect(wrapper.find('[data-test="button-next"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="button-previous"]').exists()).toBe(false);
  });
  it("Doesn't show next button on last page, and shows previous button", async () => {
    const mockResults: MoviesResult = {
      page: 2,
      per_page: 10,
      total: 2,
      total_pages: 2,
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
    expect(wrapper.find('[data-test="button-next"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="button-previous"]').exists()).toBe(true);
  });

  it("Shows both buttons when in the middle of pagination", async () => {
    const mockResults: MoviesResult = {
      page: 2,
      per_page: 10,
      total: 20,
      total_pages: 3,
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
    expect(wrapper.find('[data-test="button-next"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="button-previous"]').exists()).toBe(true);
  });
});
