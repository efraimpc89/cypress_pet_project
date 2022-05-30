class menuPage {

    elements = {
        servicesMainMenu: () => cy.get("//a[text() = 'Services']"),
        howWeDoItMainMenu: () => cy.get("//a[text() = 'How We Do It']"),
        ourWorkMainMenu: () => cy.get("//a[text() = 'Our Work']"),
        insightsMainMenu: () => cy.get("//a[text() = 'Insights']"),
        aboutMainMenu: () => cy.get("//a[text() = 'About']"),
        contactUsMenuBtn: () => cy.get("//span[text() = 'CONTACT US']")
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

    clickContactUsMenuBtn(){
        this.elements.contactUsMenuBtn.click();
    }

}

module.exports = new menuPage();