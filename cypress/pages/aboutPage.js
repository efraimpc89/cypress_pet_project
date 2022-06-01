class aboutPage {

    elements = {
        aboutTitle: () => cy.get('span').contains(' About ')
    }
    
}

module.exports = new aboutPage();