/// <reference types="cypress" />
import homePage from "../pages/homePage";

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.epam.com/')

    });

    it('Should display Home Page',() => {
        homePage.elements.engineeringTitle().should('exist')
    })


})