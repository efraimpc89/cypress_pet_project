class insightsPage {

    elements = {
        filterByLbl: () => cy.get('span').contains('Filter by')
    }
    
}

module.exports = new insightsPage();