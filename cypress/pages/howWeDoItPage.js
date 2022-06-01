class howWeDoItPage {

    elements = {
        howWeDoItTitle: () => cy.get('span').contains(' How We Do It ')
    }
    

}

module.exports = new howWeDoItPage();