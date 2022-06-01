class menuPage {

    elements = {
        servicesMainMenu: () => cy.get('a').contains('Services'),
        howWeDoItMainMenu: () => cy.get('a').contains('How We Do It'),
        ourWorkMainMenu: () => cy.get('a').contains('Our Work'),
        insightsMainMenu: () => cy.get('a').contains('Insights'),
        aboutMainMenu: () => cy.get('a').contains('About'),
        careersMainMenu: () => cy.get('a').contains('Careers'),
        contactUsMenuBtn: () => cy.get('span').contains('CONTACT US')
    }
    
    clickServicesMainMenu(){
        this.elements.servicesMainMenu.click();
    }

    clickHowWeDoItMainMenu(){
        this.elements.howWeDoItMainMenu.click();
    }

    clickOurWorkMainMenu(){
        this.elements.ourWorkMainMenu.click();
    }

    clickInsightsMainMenu(){
        this.elements.insightsMainMenu.click();
    }

    clickAboutMainMenu(){
        this.elements.aboutMainMenu.click();
    }

    clickCareersMainMenu(){
        this.elements.careersMainMenu.click();
    }

    clickContactUsMenuBtn(){
        this.elements.contactUsMenuBtn.click();
    }

}

module.exports = new menuPage();