describe('network stubbing', () => {
  it('succeeds on large responses', () => {
    cy.server();
    cy.fixture('large.json').then(largeJson => {
      cy.route({
        method: 'GET',
        url:
          'https://example.com/large.json',
        response: largeJson,
      });
    }).as('large');

    cy.visit('/');
    cy.wait('@large');
    cy.contains('React');
  });
});
