context('Home page', () => {

  let fixtureData;

  beforeEach(() => {
    cy.visit('/');
    cy.fixture('fixture-example.json').as('exampleFixture').then(exampleFixture => { fixtureData = exampleFixture; });
  })

  describe('with valid data and options', () => {
    it('home page contains logo', () => {
      cy.get('a > img').should('have.attr', 'src').and('include', fixtureData.logoPath)
    });
  });
});
