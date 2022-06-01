class ourWorkPage {

    elements = {
        ourWorkTitle: () => cy.get('span').contains(' Our Work ')
    }
    
}

module.exports = new ourWorkPage();