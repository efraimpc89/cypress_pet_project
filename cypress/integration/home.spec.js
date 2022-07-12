import HomePage from "../pages/HomePage";

describe('Home Page Tests', () => {

    let homePage;

    beforeEach(() => {
        cy.viewport(2000, 1250)
        cy.visit('https://www.epam.com/')
        homePage = new HomePage();

    });

    it('Should display Home Page',() => {
        homePage.elements.engineeringTitle().should('exist')
    })


})