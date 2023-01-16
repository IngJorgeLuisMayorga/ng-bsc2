
describe('BSC Home :: First Load and Visual Impressions', () => {

    beforeEach(() => {
      //cy.visit('http://localhost:5201/');
      cy.visit('http://127.0.0.1:5501');
    })
  
    it('It should render Header:Ads', () => {
      cy.get('.header-ads').contains('DE DESCUENTO EN TU PRIMERA COMPRA');

    })

    it("should pass the audits", () => {
        cy.lighthouse({
            "performance": 90,
            "accessibility": 95,
            "best-practices": 95,
            "seo": 95,
            "pwa": 95,
        });
    });

  })