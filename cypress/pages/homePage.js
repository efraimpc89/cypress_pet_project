class homePage {

    elements = {
        engineeringTitle: () => cy.get('span.title-slider__slide-row')
    }
    

}

module.exports = new homePage();