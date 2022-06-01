class servicesPage {

    elements = {
        servicesTitle: () => cy.get('span').contains(' Services ')
    }   
}

module.exports = new servicesPage();