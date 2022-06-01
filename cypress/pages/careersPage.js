class careersPage {

    elements = {
        careersTitle: () => cy.get('span').contains(' Work with Us ')
    }
    
}

module.exports = new careersPage();