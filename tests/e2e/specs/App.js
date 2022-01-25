// https://docs.cypress.io/api/introduction/api.html
describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("activates button when input inserted", () => {
    cy.get("[data-test='search']").should("be.empty");
    cy.get("[data-test='submit']").should("be.disabled");
    cy.get("[data-test='search']").type("harry potter");
    cy.get("[data-test='submit']").should("not.be.disabled");
  });
  it("Fetches and displays movies on search", () => {
    cy.get("[data-test='search']").type("harry potter");
    cy.get("[data-test='submit']").click();
    cy.wait(1000);
    cy.get("[data-test='record']").should("exist");
  });
  it("Fetches next and previous pages of results", () => {
    cy.get("[data-test='search']").type("harry potter");
    cy.get("[data-test='submit']").click();
    cy.wait(1000);
    cy.get("[data-test='button-next']").click();
    cy.wait(1000);
    cy.get("[data-test='record']").should("exist");
    cy.get("[data-test='button-previous']").click();
    cy.wait(1000);
    cy.get("[data-test='record']").should("exist");
  });
  it("Adds and removes movies to favourites", () => {
    cy.get("[data-test='search']").type("harry potter");
    cy.get("[data-test='submit']").click();
    cy.wait(1000);
    cy.get("[data-test='favourite-add']").first().click();
    cy.get("[data-test='favourite']").first().should("exist");
    cy.get("[data-test='favourite-remove']").first().click();
    cy.get("[data-test='favourite']").should("not.exist");
  });
});
