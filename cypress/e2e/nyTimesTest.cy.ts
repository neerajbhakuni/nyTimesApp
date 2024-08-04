describe('NY Times App Test Cases', () => {
  it('Render New Times Header Title', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid^="header-title"]').should("exist");
  })

  it("Render List of Articles", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    cy.wait(3000);
    cy.get('[data-testid^="card-"]').should("exist");
  });

  it("On First Article Click", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    cy.wait(3000);
    cy.get('[data-testid="card-1"]').click();
    cy.get('[data-testid^="article-image"]').should("exist");
  });

  it("Render on Select 7 from Dropdown", () => {
    cy.visit("http://localhost:3000/");
    cy.get("select").select("7").should("have.value", "7");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    cy.wait(6000);
    cy.get('[data-testid^="card-"]').should("exist");
  });
});