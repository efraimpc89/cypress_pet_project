import CareersPage from "../pages/careersPage";
import MenuPage from "../pages/MenuPage";

describe('Careers Page Tests', () => {

    let menuPage;
    let careersPage;

    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.epam.com/')
        menuPage = new MenuPage();
        careersPage = new CareersPage();
        menuPage.clickCareersMainMenu()
    });

    /*it('Should display Careers Page',() => {
        careersPage.elements.btnFind().should('exist')
    })*/

    it('QA keyword should return results',() => {
        careersPage.fillKeywordTextBox("QA")
        careersPage.clickFindButton()
        careersPage.viewAndApplyBtnList().should('exist')
    })


})