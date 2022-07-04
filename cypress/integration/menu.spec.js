import AboutPage from "../pages/AboutPage";
import CareersPage from "../pages/CareersPage";
import HowWeDoItPage from "../pages/HowWeDoItPage";
import InsightsPage from "../pages/InsightsPage";
import MenuPage from "../pages/MenuPage";
import OurWorkPage from "../pages/OurWorkPage";
import ServicesPage from "../pages/ServicesPage";

describe('Menu Navigation Tests', () => {

    let menuPage;
    let servicesPage;
    let howWeDoItPage;
    let insightsPage;
    let ourWorkPage;
    let aboutPage;
    let careersPage;

    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.epam.com/')
        menuPage = new MenuPage();
        servicesPage = new ServicesPage();
        howWeDoItPage = new HowWeDoItPage();
        insightsPage = new InsightsPage();
        ourWorkPage = new OurWorkPage();
        aboutPage = new AboutPage();
        careersPage = new CareersPage();
        
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
        howWeDoItPage.elements.howWeDoItTitle().should('exist')
    })

    it('Should navigate to Our Work from main menu',() => {
        menuPage.clickOurWorkMainMenu()
        ourWorkPage.elements.ourWorkTitle().should('exist')
    })

    it('Should navigate to Insights from main menu',() => {
        menuPage.clickInsightsMainMenu()
        insightsPage.elements.filterByLbl().should('exist')
    })

    it('Should navigate to About from main menu',() => {
        menuPage.clickAboutMainMenu()
        aboutPage.elements.aboutTitle().should('exist')
    })

    it('Should navigate to Careers from main menu',() => {
        menuPage.clickCareersMainMenu()
        careersPage.elements.btnFind().should('exist')
    })

})