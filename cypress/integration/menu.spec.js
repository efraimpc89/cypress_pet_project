import aboutPage from "../pages/aboutPage";
import careersPage from "../pages/careersPage";
import howWeDoITPage from "../pages/howWeDoItPage";
import insightsPage from "../pages/insightsPage";
import menuPage from "../pages/menuPage";
import ourWorkPage from "../pages/ourWorkPage";
import servicesPage from "../pages/servicesPage";

describe('Menu Navigation Tests', () => {
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.epam.com/')
    });

    it('Should display services main menu',() => {
        menuPage.elements.servicesMainMenu().should('exist')
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

    it('Should navigate to Services from main menu',() => {
        menuPage.clickServicesMainMenu()
        servicesPage.elements.servicesTitle().should('exist')
    })

    it('Should navigate to How We Do It from main menu',() => {
        menuPage.clickHowWeDoItMainMenu()
        howWeDoItPage.elements.servicesTitle().should('exist')
    })

    it('Should navigate to Our Work from main menu',() => {
        menuPage.clickOurWorkMainMenu()
        ourWorkPage.elements.servicesTitle().should('exist')
    })

    it('Should navigate to Insights from main menu',() => {
        menuPage.clickInsightsMainMenu()
        insightsPage.elements.filterByLbl().should('exist')
    })

    it('Should navigate to About from main menu',() => {
        menuPage.clickAboutMainMenu()
        aboutPage.elements.servicesTitle().should('exist')
    })

    it('Should navigate to Careers from main menu',() => {
        menuPage.clickCareersMainMenu()
        careersPage.elements.careersTitle().should('exist')
    })

    


})