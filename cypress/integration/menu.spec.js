import menuPage from "../pages/menuPage";
import servicesPage from "../pages/servicesPage";

describe('Menu Navigation Tests', () => {
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.epam.com/')
    });

    it('Should navigate to Services from main menu',() => {
        menuPage.elements.servicesMainMenu().should('exist')
        menuPage.clickServicesMainMenu()
        servicesPage.elements.servicesTitle().should('exist')
    })

    it('Should display How We Do It main menu',() => {
        menuPage.elements.howWeDoItMainMenu().should('exist')
    })

    it('Should display Our Work main menu',() => {
        menuPage.elements.ourWorkMainMenu().should('exist')
    })

    it('Should display Insights main menu',() => {
        menuPage.elements.insightsMainMenu().should('exist')
    })

    it('Should display About main menu',() => {
        menuPage.elements.aboutMainMenu().should('exist')
    })

    it('Should display Careers main menu',() => {
        menuPage.elements.careersMainMenu().should('exist')
    })


})